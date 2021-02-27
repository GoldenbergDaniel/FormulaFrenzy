from flask import Flask, render_template, request
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config["SECRET_KEY"] = "abcde"
socketio = SocketIO(app, cors_allowed_origins="*")

users = []
messages = []


@socketio.on("message")
def handle_message(msg):
    if msg == "clear":
        messages.clear()
    else:
        messages.append(msg)
        send(msg, broadcast=True)


@socketio.on("username", namespace="/private")
def revieve_username(username):
    users.append({username: request.sid})
    print(users)


@app.route("/")
def index():
    return render_template("index.html", messages=messages)


if __name__ == "__main__":
    socketio.run(app)
