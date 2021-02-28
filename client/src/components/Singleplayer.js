//import React, { useState, useEffect} from "react"
import io from "socket.io-client"
import "../css/singleplayer.css"
import "../css/index.css"


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


var socket = io.connect("http://127.0.0.1:5000/")

socket.on("connect", () => {

})

//Don't delete
socket.on("message",(msg) => {
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

function check()
{
  socket.on("check", (isCorrect, func) => {
    //EXAMPLE OF USER INPUT
    socket.emit(inputFunc)
    if (isCorrect) {
      window.alert("Correct!")
    } else {
      window.alert("Incorrect! The function should be: " + func)
    }
  })

  
}

//GET RID OF THIS LATER!
inputDisplay = [0, 2, 3, 4]
outputDisplay = [6, 7, 5, 3]

userFunc = "x^2+3"

var Singleplayer = () => {  

const { items } = this.state;

  return (
    <div id="singleplayer">
      <div id="table" className="white">
        <div id="input1" className="left top">{inputDisplay[0]}</div>
        <div id="input2" className="top">{inputDisplay[1]}</div>
        <div id="input3" className="top">{inputDisplay[2]}</div>
        <div id="input4" className="top">{inputDisplay[3]}</div>
        <div id="output1" className="left">{outputDisplay[0]}</div>
        <div id="output2">{outputDisplay[1]}</div>
        <div id="output3">{outputDisplay[2]}</div>
        <div id="output4">{outputDisplay[3]}</div>
      </div>
      <div id="input-box">
        <input type="text" placeholder="Enter function" id="id-field" className="orange" name="userFunc" onChange={userFunc = "x^3*5"}></input>
        <button onClick={check()}>Check</button>
      </div>
    </div>
  )
}
    
export default Singleplayer
