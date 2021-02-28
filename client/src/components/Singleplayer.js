import "../css/singleplayer.css"
import io from "socket.io-client"
import Table from "./Table"

import Stats from "./Stats"

var socket = io.connect("http://127.0.0.1:5000/")

// var inputDisplay 
// var outputDisplay 

//var actualFunction 
//var actualFunctionP

var check = () => {
  var inputFunc = document.getElementById("id-field")
  socket.emit("check", inputFunc.value)
}

var Singleplayer = () => {  
  return (
    <body onLoad={socket.emit("question")}>
    <div id="singleplayer">
      <div id="input-box">
        <Stats mode="singleplayer"/>
        <Table inputDisplay={[0, 1, 2, 3]} outputDisplay={[3, 1, 8, 2]}/>
        <input type="text" placeholder="Enter function" id="id-field" className="orange"></input>
        <div id="btn-container">
          <button type="text" onClick={() => {
            check()
          }}>Check</button>
        </div>
      </div>
    </div>
    </body>
  )
}

export default Singleplayer
