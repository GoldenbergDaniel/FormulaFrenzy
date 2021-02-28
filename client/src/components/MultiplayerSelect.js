import React, { useState, useEffect} from "react"
import io from "socket.io-client"
import "../css/multiplayer_select.css"
import "../css/index.css"

var MultiplayerSelect = () => {  
  return (
    <div id="multiplayer-select">
      <div id="child-container">
        <h1><span className="white">var</span> <span className="blue">roomID</span> <span className="white">=</span> </h1>
        <input type="text" placeholder="####" id="id-field" className="orange"></input>
      </div>
    </div>
  )
}
  
export default MultiplayerSelect
