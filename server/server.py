from flask import Flask, render_template, request
from flask_socketio import SocketIO, send, emit, join_room, leave_room

from algorithm.algorithm import *

###########################

initInputArr()
print("Inputs: ", inputsGlobal)

functionGlobal = generateFunc(4)

functionGlobal_display = ''.join(map(str, functionGlobal))


print("Function: ", functionGlobal_display)

outputsGlobal = generateOutput(inputsGlobal, functionGlobal)
print("Outputs: ", outputsGlobal)

print("With Parentheses: ", ''.join(map(str, withParentheses(functionGlobal))))

userFunc = input("Guess: ")

print("Dynamic: ", checkFuncDynamic(userFunc, functionGlobal, inputsGlobal))
print("Static: ", checkFuncStatic(userFunc, functionGlobal))
print("Univeral: ", universalCheck(userFunc, functionGlobal, inputsGlobal))
#############################




app = Flask(__name__)
app.config["SECRET_KEY"] = "abcde"
socketio = SocketIO(app, cors_allowed_origins="*")

functions = []


@socketio.on("function")
def handle_function(func):
    functions.append(func)
    print(functions)
    output = generateOutput([1,2,3,4,5], str(func))
    emit("function", output, broadcast=True)
    return render_template("index.html", funcs=functions)

@socketio.on("join")
def on_join(room):
    join_room(room)
    User = "User: " + request.sid
    send(User + " has entered the room.", room=room)

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
