var socket = io.connect("http://127.0.0.1:5000/")

socket.on("connect", () => {

})

socket.on("message",(msg) => {
  var functionList = document.getElementById("function-list")
  var newFunction = document.createElement("p")
  //newFunction.append(msg)
  //functionList.appendChild(msg)
  console.log(msg)
})

socket.on("function",(func) => {
  var functionList = document.getElementById("function-list")
  var newFunction = document.createElement("p")
  newFunction.append(func)
  functionList.appendChild(newFunction)
})

socket.on("check", (isCorrect) => {
  if (isCorrect) {
    console.log("Correct input!")
  } else {
    console.log("Incorrect input!")
  }
})

var sendBtn = document.getElementById("send-function-btn")
sendBtn.addEventListener("click",() => {
  var funcField = document.getElementById("function-field")
  var funcList = document.getElementById("function-list")

  socket.emit("join", funcField.value)
  funcField.value = ""
})
