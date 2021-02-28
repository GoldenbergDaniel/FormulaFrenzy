import React, { useState } from "react"
import "../css/multiplayer.css"

import Table from "./Table"
import Stats from "./Stats"

var Multiplayer = () => {
  var [isGuesser] = useState(false)

  if (!isGuesser) {
    return (
      <div id="multiplayer">
        <div id="input-box">
          <Stats mode="multiplayer-creator"/>
          <input type="text" placeholder="Enter function" id="func-create-field" className="orange"></input>
        </div>
      </div>
    )
  }
  else {
    return (
      <div id="multiplayer">
        <div id="not-guesser">
          <Stats mode="multiplayer-solver"/>
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
