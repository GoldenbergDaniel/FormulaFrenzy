import React from "react"
import io from "socket.io-client"
import "./css/index.css"
import "./css/App.css"

import Navbar from "./components/Navbar"
import MultiplayerSelect from "./components/MultiplayerSelect"
import Singleplayer from "./components/Singleplayer"
import Multiplayer from "./components/Multiplayer"

var endPoint = "http://localhost:5000"
var socket = io.connect(`${endPoint}`)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      window: "multiplayer"
    }
    this.homeClick = this.homeClick.bind(this)
  }

  homeClick() {
    this.setState({
      window: "home" 
    })
  }

  render() {
    if (this.state.window === "home") {
      return (
        <div id="app">
          <Navbar home={this.homeClick}/>
        </div>
      )
    }
    else if (this.state.window  === "gamemode-select") {
      return (
        <div id="app">
          <Navbar home={this.homeClick}/>
        </div>
      )
    }
    else if (this.state.window  === "multiplayer-select") {
      return (
        <div id="app">
          <Navbar home={this.homeClick}/>
          <MultiplayerSelect/>
        </div>
      )
    }
    else if (this.state.window  === "multiplayer") {
      return (
        <div id="app">
          <Navbar home={this.homeClick}/>
          <Multiplayer/>
        </div>
      )
    }
    else if (this.state.window  === "singleplayer") {
      return (
        <div id="app">
          <Navbar home={this.homeClick}/>
          <Singleplayer/>
        </div>
      )
    }
  }
}

export default App
