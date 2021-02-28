// import React, { useState} from "react"
import "../css/singleplayer.css"
import WebSocketHandler from "./WebSocketHandler";
import io from "socket.io-client"
import Table from "./Table"

import Stats from "./Stats"

var socket = io.connect("http://127.0.0.1:5000/")



var inputDisplay 
var outputDisplay 

//GET RID OF THIS LATER!
inputDisplay = [0, 2, 3, 4]
outputDisplay = [6, 7, 5, 3]



function check() {
  var inputFunc = document.getElementById("id-field")
  socket.emit("check", inputFunc.value)
}





// var userFunc = "x^2+3"

var Singleplayer = () => {  
  // var [ items, setItems ] = useState();

  return (
    <body onLoad={socket.emit("question")}>
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
    </body>
  )
}

export default Singleplayer



