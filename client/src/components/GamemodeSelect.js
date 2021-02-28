import "../css/gamemode_select.css"
import "../css/index.css"

var GamemodeSelect = (props) => {  
  return (
    <div id="gamemode-select">
      <div class="child-container" onClick={props.singleplayer}>
        <h1><span className="white">var</span> <span className="blue">gamemode</span> <span className="white">=
          "</span><span className="green">singleplayer</span><span className="white">"</span></h1>
      </div>
      <div class="child-container" onClick={props.multiplayer_select}>
        <h1><span className="white">var</span> <span className="blue">gamemode</span> <span className="white">=
          "</span><span className="green">multiplayer</span><span className="white">"</span></h1>
      </div>
    </div>
  )
}
    
export default GamemodeSelect
