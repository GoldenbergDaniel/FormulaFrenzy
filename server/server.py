from flask import Flask, render_template, request
from flask_socketio import SocketIO, send, emit, join_room, leave_room
from typing import List

import sys

sys.path.append("../algorithm")
from algorithm import *

app = Flask(__name__)
app.config["SECRET_KEY"] = "abcde"
socketio = SocketIO(app, cors_allowed_origins="*")

functionGlobal = ["x", "*", 3, "+", 1]


@socketio.on("connect")
def handle_connection():
    print("User " + request.remote_addr + " has connected!")
    join_room(request.remote_addr)
    print("User " + request.remote_addr + " has been assigned to room: " + request.remote_addr)
    send("Welcome!")
    # Each person is assigned to a room with only them in it, based on their IP.


@socketio.on("disconnect")
def handle_disconnection():
    room = getRoom(request.remote_addr)
    if room is not None:
        roomIndex[room].remove(request.remote_addr)
        print("User: " + request.remote_addr + " has been removed from game room: " + room)
        print("Reason: Disconnect")
    print("User: " + request.remote_addr + " has lost connection!")


@socketio.on("question")
def handle_question():
    functionGlobal = generateFunc(3)
    # print("Func G: ", functionGlobal)
    initInputArr()
    output = generateOutput(inputsGlobal, functionGlobal)

    """
    print("inputs", inputsGlobal,
          "outputs", output,
          "function", ''.join(map(str, functionGlobal)),
          "functionP", withParentheses(functionGlobal))
    """

    emit("question",
         (str(inputsGlobal), str(output), str(''.join(map(str, functionGlobal))), str(withParentheses(functionGlobal))))


@socketio.on("makeTable")
def make_table_given_function_for_multiplayer(func):
    functionGlobal = list(func)
    initInputArr()
    output = generateOutput(inputsGlobal, func)
    """response = {
        "inputs": inputsGlobal,
        "outputs": output,
        "function": ''.join(map(str, functionGlobal)),
        "functionP": withParentheses(functionGlobal)
    }"""

    """
    print("inputs", inputsGlobal,
          "outputs", output,
          "function", ''.join(map(str, functionGlobal)),
          "functionP", withParentheses(functionGlobal))

    emit("makeTable", inputsGlobal, output, ''.join(map(str, functionGlobal)), withParentheses(functionGlobal))
    """


@socketio.on("check")
def check_user_function(func):
    print("Check: ", ''.join(map(str, func)))
    print("Function global: ", functionGlobal)
    boolResp = universalCheck(''.join(map(str, func)), functionGlobal, inputsGlobal)
    emit("check", boolResp, ''.join(map(str, functionGlobal)), room=request.remote_addr)


# a dictionary of all rooms, containing an array of size 2 for each player's remote_addr
roomIndex = {}


@socketio.on("join")
def on_join(room):
    print("Someone is joining!")
    if room not in roomIndex:
        print("Room is null, creating a new one!")
        roomIndex.update({room: [request.remote_addr]})
        User = "User: " + request.remote_addr
        join_room(room)
        role = "maker"
        emit("assignRole", role, room=request.remote_addr)
        print(User + " has entered the room: " + str(room) + " with " + str(roomIndex[room]) + " with role: " + role)

    elif len(roomIndex[room]) < 2:
        print("Attempting to join existing room with " + str(len(roomIndex[room])) + " person(s).")
        peopleInRoom = (roomIndex[room])
        peopleInRoom.append(request.remote_addr)
        print("Room is now keeping track of user(s) " + str(roomIndex[room]))
        User = "User: " + request.remote_addr
        join_room(room)
        print("After joining, the room has " + str(len(roomIndex[room])) + " person(s).")
        if len(roomIndex[room]) == 1:
            role = "maker"
        elif len(roomIndex[room]) == 2:
            role = "cracker"
        print(User + " has entered the room: " + str(room) + " with " + str(roomIndex[room]) + " with role: " + role)
        emit("assignRole", role, room=request.remote_addr)
    else:
        print("Room is full!")


def getRoom(ip):
    room = None
    print("Searching to see if User: " + ip + " is in a game room...")
    for currRoom in roomIndex:
        if ip in roomIndex[currRoom]:
            room = currRoom
    if room is not None:
        return room
    else:
        print("Couldn't find User: " + ip + " in a game room!")


@socketio.on("leave")
def on_leave():
    room = getRoom(request.remote_addr)
    if room is not None:
        print("Found them! Removing them from game room " + room)
        leave_room(room)
        roomIndex[room].remove(request.remote_addr)
        print("User: " + request.remote_addr + " has left the room.")
        send("User: " + request.remote_addr + " has left the room.", room=room)
    else:
        print("Couldn't find them in a game room!")


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    socketio.run(app)
