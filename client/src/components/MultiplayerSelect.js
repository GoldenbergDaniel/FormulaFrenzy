import "../css/multiplayer_select.css"
import "../css/index.css"
import io from "socket.io-client"

var endPoint = "http://localhost:5000"
var socket = io.connect(`${endPoint}`)

function clickHandler(props){
    var inputBox = document.getElementById("id-field")
    console.log(inputBox.value)
    socket.emit("join",inputBox.value)
    props.multiplayer()
}

var MultiplayerSelect = (props) => {
  return (
    <div id="multiplayer-select">
      <div id="child-container">
        <h1><span className="white">var</span> <span className="blue">roomID</span> <span className="white">=</span> </h1>
        <input type="text" placeholder="####" id="id-field" className="orange"/>
        <button type="text" onClick={() => {
            clickHandler(props)
        }}>Confirm</button>
      </div>
    </div>
  )
}
  
export default MultiplayerSelect
