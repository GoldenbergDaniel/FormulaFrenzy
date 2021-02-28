import "../css/multiplayer_select.css"
import "../css/index.css"
import io from "socket.io-client"

var socket = io.connect("http://127.0.0.1:5000/")

var clickHandler = (props) => {
  var inputBox = document.getElementById("id-field")
  console.log(inputBox.value)
  socket.emit("join",inputBox.value)
  props.multiplayer()
}

var MultiplayerSelect = (props) => {
  return (
    <div id="multiplayer-select">
      <div id="input-container">
        <h1><span className="white">var</span> <span className="blue">roomID</span> <span className="white">=</span> </h1>
        <input type="text" placeholder="####" id="id-field" className="orange"/>
      </div>
      <div id="btn-container">
        <button type="text" onClick={() => {
          clickHandler(props)
        }}>Enter</button>
      </div>
    </div>
  )
}
  
export default MultiplayerSelect
