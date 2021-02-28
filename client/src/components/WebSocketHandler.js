import io from "socket.io-client"
import Singleplayer from "./Singleplayer";

var socket = io.connect("http://127.0.0.1:5000/")

var WebSocketHandler = () => {

  socket.on("check", (isCorrect, func) => {
    if (isCorrect) {
      window.alert("Correct!")
    }
    else {
      window.alert("Incorrect! The function should be: " + func)
    }
  })

  socket.on("question",(dictonary) => {
  Singleplayer.inputDisplay = dictonary.inputs
  Singleplayer.outputDisplay = dictonary.outputs

  window.alert(dictonary.inputs)
  window.alert(dictonary.outputs)
  window.alert(dictonary.function)
  window.alert(dictonary.functionP)
})

socket.on("message",(msg) => {
  console.log(msg)
})


socket.on("check", (isCorrect, func) => {
  if (isCorrect) {
    window.alert("Correct!")
  } 
  else {
    window.alert("Incorrect! The function should be: " + func)
  }
})
  return null
}

export default WebSocketHandler
