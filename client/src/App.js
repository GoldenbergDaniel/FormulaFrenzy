import React, { useState, useEffect} from "react"
import io from "socket-io"
import './App.css'

var endPoint = "http://localhost:5000"
var socket = io.connect(`${endPoint}`)

var App = () => {
  var [messages, setMessages] = useState([
    "Hello and welcome!"
  ])

  var [messages, setMessages] = useState(["Hello and welcome!"])
  var [message, setMessage] = useState("")

  useEffect(() => {
    getMessages()
    [message.length]
  })

  return (
    <div className="App">
      
    </div>
  )
}

export default App
