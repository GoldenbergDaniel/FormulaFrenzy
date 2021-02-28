import "../css/navbar.css"

var Navbar = (props) => {  
  return (
    <div id="navbar">
      <nav>
        <div className="nav-item" id="nav-title" onClick={props.home}>
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
