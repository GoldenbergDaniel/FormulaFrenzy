import React, { useState} from "react"
import io from "socket.io-client"
import "./css/index.css"
import "./css/App.css"

import Navbar from "./components/Navbar"
import MultiplayerSelect from "./components/MultiplayerSelect"
import Singleplayer from "./components/Singleplayer"
import Multiplayer from "./components/Multiplayer"

var endPoint = "http://localhost:5000"
var socket = io.connect(`${endPoint}`)

var App = () => {
  return (
    <div id="app">
      <Navbar/>
      {/* <MultiplayerSelect/>a */}
      {/* <Singleplayer/> */}
      <Multiplayer/>
    </div>
  )
}

export default App
