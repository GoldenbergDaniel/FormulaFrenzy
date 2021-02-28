import io from "socket.io-client"

var socket = io.connect("http://127.0.0.1:5000/")


var WebSocketHandler = () => {

socket.on("message",(msg) => {
  console.log(msg)
})

socket.on("function",(func) => {
  var functionList = document.getElementById("function-list")
  var newFunction = document.createElement("p")
  newFunction.append(func)
  functionList.appendChild(newFunction)
})

socket.on("check", (isCorrect, func) => {
  if (isCorrect) {
    window.alert("Correct!")
  } else {
    window.alert("Incorrect! The function should be: " + func)
  }
})
  return null
}

export default WebSocketHandler