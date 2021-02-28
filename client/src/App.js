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
  var [window, setWindow] = useState("home")

  if (window === "home") {
    return (
      <div id="app">
        <Navbar/>
      </div>
    )
  }
  else if (window === "gamemode-select") {
    return (
      <div id="app">
        <Navbar/>
      </div>
    )
  }
  else if (window === "multiplayer-select") {
    return (
      <div id="app">
        <Navbar/>
        <MultiplayerSelect/>
      </div>
    )
  }
  else if (window === "multiplayer") {
    return (
      <div id="app">
        <Navbar/>
        <Multiplayer/>
      </div>
    )
  }
  else if (window === "singleplayer") {
    return (
      <div id="app">
        <Navbar/>
        <Singleplayer/>
      </div>
    )
  }
}

export default App
