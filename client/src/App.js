import React, { useState, useEffect} from "react"
import io from "socket.io-client"
import "./css/index.css"
import "./css/App.css"

import Navbar from "./components/Navbar"

var endPoint = "http://localhost:5000"
var socket = io.connect(`${endPoint}`)

var App = () => {
  return (
    <div id="app">
      <Navbar/>
    </div>
  )
}

export default App
