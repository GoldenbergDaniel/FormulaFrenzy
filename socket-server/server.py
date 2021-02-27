from flask import Flask, render_template, request
from flask_socketio import SocketIO, send, emit, join_room, leave_room

app = Flask(__name__)
app.config["SECRET_KEY"] = "abcde"
socketio = SocketIO(app, cors_allowed_origins="*")

functions = []

@socketio.on("function")
def handle_function(string):
    functions.append(string)
    emit("function", string, broadcast=True)
    print(functions)
    return render_template("index.html", funcs=functions)

@socketio.on("join")
def on_join(data):
    username = data["username"]
    room = data["room"]
    join_room(room)
    send(username + " has entered the room.", room=room)
    print(username + " has entered the room.", room=room)

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
