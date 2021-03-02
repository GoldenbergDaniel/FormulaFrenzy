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
    join_room(request.sid)
    send("Welcome!")
    # Each person is assigned to a room with only them inside it.


@socketio.on("question")
def handle_question():
    functionGlobal = generateFunc(3)
    print("Func G: ", functionGlobal)
    initInputArr()
    output = generateOutput(inputsGlobal, functionGlobal)

    print("inputs", inputsGlobal,
        "outputs", output,
        "function", ''.join(map(str, functionGlobal)),
        "functionP", withParentheses(functionGlobal))

    emit("question", (str(inputsGlobal), str(output), str(''.join(map(str, functionGlobal))), str(withParentheses(functionGlobal))))

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

    
    print("inputs", inputsGlobal,
        "outputs", output,
        "function", ''.join(map(str, functionGlobal)),
        "functionP", withParentheses(functionGlobal))

    emit("makeTable", inputsGlobal, output, ''.join(map(str, functionGlobal)), withParentheses(functionGlobal))

@socketio.on("check")
def check_user_function(func):
    print("Check: ", ''.join(map(str, func)))
    print("Function global: ", functionGlobal)
    boolResp = universalCheck(''.join(map(str, func)), functionGlobal, inputsGlobal)
    emit("check", boolResp, ''.join(map(str, functionGlobal)), room=request.sid)


# a dictionary of all rooms, containing an array of size 2 for each player's SID
roomIndex = {}


@socketio.on("join")
def on_join(room):
    print("Someone is joining!")
    if room not in roomIndex:
        print("Room is null, creating a new one!")
        roomIndex.update({room: [request.sid]})
        User = "User: " + request.sid
        join_room(room)
        role = "maker"
        emit("assignRole", role, room=request.sid)
        print(User + " has entered the room: " + str(room) + " with " + str(roomIndex[room]) + " with role: " + role)

    elif len(roomIndex[room]) <= 2:
        print("Attempting to join existing room with " + str(len(roomIndex[room])) + " person(s) inside.")
        peopleInRoom = (roomIndex[room])
        peopleInRoom.append(request.sid)
        print("Room is now keeping track of user(s) " + str(roomIndex[room]))
        User = "User: " + request.sid
        join_room(room)
        print("After joining, the room has " + str(len(roomIndex[room])) + " person(s) inside.")
        if len(roomIndex[room]) == 1:
            role = "maker"
        elif len(roomIndex[room]) == 2:
            role = "cracker"
        print(User + " has entered the room: " + str(room) + " with " + str(roomIndex[room]) + " with role: " + role)
        emit("assignRole", role, room=request.sid)
    else:
        print("Room is full!")


@socketio.on("leave")
def on_leave(data):
    username = data["username"]
    room = data ["room"]
    leave_room(room)
    send(username + " has left the room.", room=room)
    print(username + " has left the room.", room=room)

@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    socketio.run(app)
