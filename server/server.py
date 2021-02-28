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

functionGlobal = []


@socketio.on("question")
def handle_question():
    functionGlobal = generateFunc(3)
    initInputArr()
    output = generateOutput(inputsGlobal, functionGlobal)
    response = {
        "inputs": inputsGlobal,
        "outputs": output,
        "function": ''.join(map(str, functionGlobal)),
        "functionP": withParentheses(functionGlobal)
    }
    emit("question", response)

@socketio.on("check")
def check_user_function(func):
    boolResp = universalCheck(func, functionGlobal, inputsGlobal)
    emit("check", boolResp)

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
