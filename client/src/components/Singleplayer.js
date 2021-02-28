// import React, { useState} from "react"
import "../css/singleplayer.css"
import WebSocketHandler from "./WebSocketHandler";

import Table from "./Table"

// import React, { Component } from "react";

// class Singleplayer extends Component {
//   constructor() {
//     super();
//     this.state = {
//     };
//     this.onInputchange = this.onInputchange.bind(this);
//     this.onSubmitForm = this.onSubmitForm.bind(this);
//   }

//   onInputchange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   onSubmitForm() {
//     console.log(this.state)
//   }

//Don't delete

var inputDisplay 
var outputDisplay 

/*
socket.on("question",(dictonary) => {
  inputDisplay = dictonary.inputs
  outputDisplay = dictonary.outputs

  window.alert(dictonary.inputs)
  window.alert(dictonary.outputs)
  window.alert(dictonary.function)
  window.alert(dictonary.functionP)
})
 */

var inputFunc 

function check() {
  var inputBox = document.getElementById("id-field")
  WebSocketHandler.socket.emit("check", inputBox.value)
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
