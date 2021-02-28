import React from "react"
import "./css/index.css"

import Navbar from "./components/Navbar"
import MultiplayerSelect from "./components/MultiplayerSelect"
import Singleplayer from "./components/Singleplayer"
import Multiplayer from "./components/Multiplayer"
import GamemodeSelect from "./components/GamemodeSelect"
import WebSocketHandler from "./components/WebSocketHandler"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      window: "home"
    }
    this.homeClick = this.homeClick.bind(this)
    this.multiplayerClick = this.multiplayerClick.bind(this)
    this.multiplayerSelectClick = this.multiplayerSelectClick.bind(this)
    this.singleplayerClick = this.singleplayerClick.bind(this)
  }

  homeClick() {
    this.setState({
      window: "home" 
    })
  }

  multiplayerSelectClick() {
    this.setState({
      window: "multiplayer-select"
    })
  }

  singleplayerClick() {
    this.setState({
      window: "singleplayer" 
    })
  }

  multiplayerClick() {
    this.setState({
      window: "multiplayer"
    })
  }

  render() {
    if (this.state.window === "home") {
      return (
        <div id="app">
          <Navbar home={this.homeClick}/>
          <WebSocketHandler socketHandler/>
          <GamemodeSelect singleplayer={this.singleplayerClick} multiplayer_select={this.multiplayerSelectClick}/>
        </div>
      )
    }
    else if (this.state.window  === "multiplayer-select") {
      return (
        <div id="app">
          <Navbar home={this.homeClick}/>
          <WebSocketHandler socketHandler/>
          <MultiplayerSelect multiplayer={this.multiplayerClick}/>
        </div>
      )
    }
    else if (this.state.window  === "multiplayer") {
      return (
        <div id="app">
          <Navbar home={this.homeClick}/>
          <WebSocketHandler socketHandler/>
          <Multiplayer/>
        </div>
      )
    }
    else if (this.state.window  === "singleplayer") {
      return (
        <div id="app">
          <Navbar home={this.homeClick}/>
          <WebSocketHandler socketHandler/>
          <Singleplayer/>
        </div>
      )
    }
  }
}

export default App
