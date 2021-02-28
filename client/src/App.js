import React from "react"
import io from "socket.io-client"
import "./css/index.css"
import "./css/App.css"

import Navbar from "./components/Navbar"
import MultiplayerSelect from "./components/MultiplayerSelect"
import Singleplayer from "./components/Singleplayer"
import Multiplayer from "./components/Multiplayer"
import GamemodeSelect from "./components/GamemodeSelect"

var endPoint = "http://localhost:5000"
var socket = io.connect(`${endPoint}`)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      window: "home"
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
          <GamemodeSelect/>
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

export default App
