import React, { useState, useEffect} from "react"
import io from "socket.io-client"
import "../css/singleplayer.css"
import "../css/index.css"

var Singleplayer = () => {  
  return (
    <div id="singleplayer">
      <div id="table" className="white">
        <div id="input1" className="left top">12</div>
        <div id="input2" className="top">3</div>
        <div id="input3" className="top">4</div>
        <div id="input4" className="top">12</div>
        <div id="output1" className="left">5</div>
        <div id="output2">2</div>
        <div id="output3">0</div>
        <div id="output4">3</div>
      </div>
      <div id="input-box">
        <input type="text" placeholder="Enter function" id="id-field" className="orange"></input>
      </div>
    </div>
  )
}
    
export default Singleplayer
