import React, { useState, useEffect} from "react"
import io from "socket.io-client"
import "../css/navbar.css"
import "../css/index.css"

var Navbar = (props) => {  
  return (
    <div id="navbar">
      <nav>
        <a>
          <div className="nav-item" id="nav-title" onClick={props.home}>
            <h1><span className="orange">function </span><span className="white">(</span><span className="blue">frenzy</span><span className={"white"}>)</span></h1>
          </div>
        </a>
        <div className="nav-item" id="nav-info">
          <h1 className="white">For Education!</h1>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
  