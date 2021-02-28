import io from "socket.io-client"
import Multiplayer from "./Multiplayer";
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

  socket.on("question",(inputs, outputs, func, functionP) => {
    window.alert(inputs)
    window.alert(outputs)
    window.alert(func)
    window.alert(functionP)

    Singleplayer.inputDisplay = inputs
    Singleplayer.outputDisplay = outputs
    Singleplayer.actualFunction = func
    Singleplayer.actualFunctionP = functionP
  
})


//emit("makeTable", onePlayer'sInputFunction)
//This table is for the other player
socket.on("makeTable",(inputs, outputs, func, functionP) => {
  window.alert(inputs)
  window.alert(outputs)
  window.alert(func)
  window.alert(functionP)

  //INIT THESE VARIABLES IN MULTIPLAYER
  Multiplayer.inputDisplay = inputs
  Multiplayer.outputDisplay = outputs
  Multiplayer.actualFunction = func
  Multiplayer.actualFunctionP = functionP

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
