import "../css/multiplayer_select.css"

var MultiplayerSelect = (props) => {
  return (
    <div id="multiplayer-select">
      <div id="child-container">
        <h1><span className="white">var</span> <span className="blue">roomID</span> <span className="white">=</span> </h1>
        <input type="text" placeholder="####" id="id-field" className="orange" onKeyPress= {
            (event) => {
                if (event.key === "13") {
                    return props.multiplayer
                }
            }
        }/>
      </div>
    </div>
  )
}
  
export default MultiplayerSelect
