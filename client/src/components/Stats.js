import React from "react"
import "../css/stats.css"

function Stats(props) {
  if (props.mode === "singleplayer") {
    return (
      <div id="stats">
        <h1 className="white">var <span className="blue">score</span> = <span className="orange">{0}</span></h1>
      </div>
    )
  }
  else if (props.mode === "multiplayer-solver") {
    return (
      <div id="stats">
        <h1 className="white">var <span className="blue">lives</span> = <span className="orange">{3}</span></h1>
        <h1 className="white">var <span className="blue">timer</span> = <span className="orange">{45}</span></h1>
      </div>
    )
  }
  else if (props.mode === "multiplayer-creator") {
    return (
      <div id="stats">
        <h1 className="white">var <span className="blue">function</span> = <span className="orange">{"2x+3"}</span></h1>
        <h1 className="white">var <span className="blue">lives</span> = <span className="orange">{3}</span></h1>
      </div>
    )
  }
}

export default Stats
