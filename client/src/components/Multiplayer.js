import React, { useState, useRef } from "react"
import io from "socket.io-client"
import "../css/multiplayer.css"

import Table from "./Table"
import Stats from "./Stats"

var socket = io.connect("http://127.0.0.1:5000/")

// var inputDisplay 
// var outputDisplay 

var check = (ref) => {
  console.log(ref.value)
  socket.emit("check", ref.value)
}

var Multiplayer = () => {
  var [isGuesser] = useState(true)
  var inputRef = useRef()

  if (!isGuesser) {
    return (
      <div id="multiplayer">
        <Stats mode="multiplayer-creator"/>
        <div id="input-box">
          <input type="text" placeholder="Enter function" id="func-create-field" className="orange"></input>
          <div id="btn-container">
            <button type="text" onClick={() => {
              // check()
            }}>Check</button>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div id="multiplayer">
        <Stats mode="multiplayer-solver"/>
        <div id="not-guesser">
          <Table inputDisplay={[0, 1, 2, 3]} outputDisplay={[3, 1, 8, 2]}/>
          <div id="input-box">
            <input ref={inputRef} type="text" placeholder="Enter function" id="func-guess-field" className="orange"></input>
            <div id="btn-container">
              <button type="text" onClick={() => {
                check(inputRef)
              }}>Check</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
    
export default Multiplayer
