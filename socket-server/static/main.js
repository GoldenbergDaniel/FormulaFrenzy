var socket = io.connect("http://127.0.0.1:5000/")

// socket.on("connect", () => {
//   socket.send("User has connected!")
// })

socket.on("message", (msg) => {
  var messageList = document.getElementById("message-list")
  var newMessage = document.createElement("p")

  newMessage.append(msg)
  messageList.appendChild(newMessage)
})

var sendBtn = document.getElementById("send-message-btn")
sendBtn.addEventListener("click", () => {
  var messageField = document.getElementById("message-field")
  var messageList = document.getElementById("message-list")
  
  if (messageField.value === "clear") {
    while (messageList.firstChild) {
      messageList.removeChild(messageList.firstChild)
    }
  } 

  socket.send(messageField.value)
  messageField.value = ""
})
