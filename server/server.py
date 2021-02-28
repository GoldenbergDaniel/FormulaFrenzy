from flask import Flask, render_template, request
from flask_socketio import SocketIO, send, emit, join_room, leave_room


import sys
sys.path.append("../algorithm")
from algorithm import *

"""
#from algorithm.algorithm import *



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
"""

app = Flask(__name__)
app.config["SECRET_KEY"] = "abcde"
socketio = SocketIO(app, cors_allowed_origins="*")

functionGlobal = []

@socketio.on("connect")
def handle_connection():
    join_room(request.sid)
    send("Assigned to room: " + request.sid)

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

    emit("question", inputsGlobal, output, ''.join(map(str, functionGlobal)), withParentheses(functionGlobal))

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
    emit("check", boolResp, ''.join(map(str, functionGlobal)),  room=request.sid)
    

@socketio.on("join")
def on_join(room):
    join_room(room)
    User = "User: " + request.sid
    send(User + " has entered the room.", room=room)
    print(User + " has entered the room: " + room)

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
