import React from 'react'
import "../css/table.css"

var Table = (props) => {
  return (
    <div id="table">
      <div id="input1" className="left top">{props.inputDisplay[0]}</div>
      <div id="input2" className="top">{props.inputDisplay[1]}</div>
      <div id="input3" className="top">{props.inputDisplay[2]}</div>
      <div id="input4" className="top">{props.inputDisplay[3]}</div>
      <div id="output1" className="left">{props.outputDisplay[0]}</div>
      <div id="output2">{props.outputDisplay[1]}</div>
      <div id="output3">{props.outputDisplay[2]}</div>
      <div id="output4">{props.outputDisplay[3]}</div>
    </div>
  )
}

export default Table
