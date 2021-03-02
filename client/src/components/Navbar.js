import "../css/navbar.css"
import io from "socket.io-client"

var socket = io.connect("http://127.0.0.1:5000/")

var homeClick = (props) => {
  socket.emit("leave")
  props.home()
}

var Navbar = (props) => {  
  return (
    <div id="navbar">
      <nav>
        <div className="nav-item" id="nav-title" onClick= {() => {
          homeClick(props)
        }}>
          <h1><span className="orange">function </span><span className="white">(</span><span className="blue">frenzy</span><span className={"white"}>)</span></h1>
        </div>
        <div className="nav-item" id="nav-info">
          <h1 className="white">For Education!</h1>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
