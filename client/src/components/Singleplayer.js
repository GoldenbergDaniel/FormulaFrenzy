// import React, { useState} from "react"
import io from "socket.io-client"
import "../css/singleplayer.css"

import Table from "./Table"
import Stats from "./Stats"

var socket = io.connect("http://127.0.0.1:5000/")

socket.on("connect", () => {

})

//Don't delete
socket.on("message", (msg) => {
  console.log(msg)
})

var inputDisplay 
var outputDisplay 

socket.on("question",(dictonary) => {
  inputDisplay = dictonary.inputs
  outputDisplay = dictonary.outputs

  window.alert(dictonary.inputs)
  window.alert(dictonary.outputs)
  window.alert(dictonary.function)
  window.alert(dictonary.functionP)
})

var inputFunc 

function check() {
  socket.on("check", (isCorrect, func) => {
    //EXAMPLE OF USER INPUT
    socket.emit(inputFunc)
    if (isCorrect) {
      window.alert("Correct!")
    } 
    else {
      window.alert("Incorrect! The function should be: " + func)
    }
  })
}

//GET RID OF THIS LATER!
inputDisplay = [0, 2, 3, 4]
outputDisplay = [6, 7, 5, 3]

// var userFunc = "x^2+3"

var Singleplayer = () => {  
  // var [ items, setItems ] = useState();

  return (
    <div id="singleplayer">
      <div id="input-box">
        <Stats mode="singleplayer"/>
        <Table inputDisplay={inputDisplay} outputDisplay={outputDisplay}/>
        <input type="text" placeholder="Enter function" id="id-field" className="orange"></input>
        <button onClick={() => {
          check()
        }}>Check</button>
      </div>
    </div>
  )
}

export default Singleplayer
