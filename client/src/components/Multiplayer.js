import React, { useState, useEffect} from "react"
import io from "socket.io-client"
import "../css/multiplayer.css"
import "../css/index.css"

var Multiplayer = () => {
  // var [funcs, setFuncs] = useState(["2x"])
  // var [func, setFunc] = useState("")

  // useEffect(() => {
  //   getFuncs()
  // }, [funcs.length])

  // var getFuncs = () => {
  //   socket.on("function", func => {
  //     setFuncs([...funcs, func])
  //   })
  // }

  // var onChange = e => {
  //   setFunc(e.target.value)
  // }

  // var onClick = () => {
  //   if (func!=""){
  //     if (func.includes("x") && (func.includes("+") || func.includes("-") || func.includes("*") || func.includes("^"))){
  //       socket.emit("function",func)
  //     } else {
  //       alert("Invalid Function!")
  //     }
  //   } else {
  //     alert("Please enter a Function")
  //   }
  // }

  var [isGuesser, setGuesser] = useState(true)

  if (!isGuesser) {
    return (
      <div id="multiplayer">
        <div id="input-box">
          <input type="text" placeholder="Enter function" id="func-create-field" className="orange"></input>
        </div>
      </div>
    )
  }
  else {
    return (
      <div id="multiplayer">
        {/* <button onClick={() => onClick()}>Send Function</button> */}
        <div id="not-guesser">
          <div id="table" className="white">
            <div id="input1" className="left top">12</div>
            <div id="input2" className="top">3</div>
            <div id="input3" className="top">4</div>
            <div id="input4" className="top">12</div>
            <div id="output1" className="left">5</div>
            <div id="output2">2</div>
            <div id="output3">0</div>
            <div id="output4">3</div>
          </div>
          <div id="input-box">
            <input type="text" placeholder="Enter function" id="func-guess-field" className="orange"></input>
          </div>
        </div>
      </div>
    )
  }
}
    
export default Multiplayer
