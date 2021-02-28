import React, { useState } from "react"
import "../css/multiplayer.css"

import Table from "./Table"

var Multiplayer = () => {
  var [isGuesser] = useState(true)

  if (!isGuesser) {
    return (
      <div id="multiplayer">
        <div id="input-box">
          <input type="text" placeholder="Enter function" id="func-create-field" className="orange"></input>
        </div>
      </div>
    )
  }
  else {
    return (
      <div id="multiplayer">
        <div id="not-guesser">
          <Table inputDisplay={[0, 1, 2, 3]} outputDisplay={[3, 1, 8, 2]}/>
          <div id="input-box">
            <input type="text" placeholder="Enter function" id="func-guess-field" className="orange"></input>
          </div>
        </div>
      </div>
    )
  }
}
    
export default Multiplayer
