import React, { useState, useEffect} from "react"
import io from "socket.io-client"
import "../css/multiplayer.css"

var Multiplayer = () => {  
  var [funcs, setFuncs] = useState(["2x"])
  var [func, setFunc] = useState("")

  useEffect(() => {
    getFuncs()
  }, [funcs.length])

  var getFuncs = () => {
    socket.on("function", func => {
      setFuncs([...funcs, func])
    })
  }

  var onChange = e => {
    setFunc(e.target.value)
  }

  var onClick = () => {
    if (func!=""){
      if (func.includes("x") && (func.includes("+") || func.includes("-") || func.includes("*") || func.includes("^"))){
        socket.emit("function",func)
      } else {
        alert("Invalid Function!")
      }
    } else {
      alert("Please enter a Function")
    }
  }

  return (
    <div id="multiplayer">
      {/* <button onClick={() => onClick()}>Send Function</button> */}
    </div>
  )
}
    
export default Multiplayer
