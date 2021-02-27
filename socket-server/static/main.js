var socket = io.connect("http://127.0.0.1:5000/")

socket.on("connect", () => {
  var data = {
    username: "Bob",
    room: socket.sessionId
  };
  socket.emit("join",data)
})

socket.on("function",(func) => {
  var functionList = document.getElementById("function-list")
  var newFunction = document.createElement("p")
  newFunction.append(func)
  functionList.appendChild(newFunction)
})

var sendBtn = document.getElementById("send-function-btn")
sendBtn.addEventListener("click",() => {
  var funcField = document.getElementById("function-field")
  var funcList = document.getElementById("function-list")

  socket.emit("function", funcField.value)
  funcField.value = ""
})
