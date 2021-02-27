import React, { useState, useEffect} from "react"
import io from "socket-io"
import './App.css'

var endPoint = "http://localhost:5000"
var socket = io.connect(`${endPoint}`)

var App = () => {
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

  return (
    <div className="App">
      
    </div>
  )
}

export default App
