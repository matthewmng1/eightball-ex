import React, {useState} from "react";

import "./EightBall.css"
import answers from "./answers"

const EightBall = (props) => {
  const getAnswers = () => answers[Math.floor(Math.random() * answers.length)+1];

  const restart = () => {
    setMsg(getAnswers())
    setShowMsg(false)

  }
  const [msg, setMsg] = useState(getAnswers())
  const [startMsg, setStartMsg] = useState("Think of a question")
  const [showMsg, setShowMsg] = useState(false)
  const onClick = () => setShowMsg(true)

  return(
  <div className="EightBall">
    <h1 className="EightBall-title">Magic Eight Ball</h1>

    <button className="EightBall-ball" style={showMsg ? {backgroundColor: msg.color} : {backgroundColor:'black'} } onClick={onClick}>
      <div>{showMsg ? msg.msg : startMsg}</div>
    </button>
    {showMsg && <button onClick={restart}>Try Again</button>}
  </div>
  )
}

export default EightBall;

// Always want to start with "Think of a question"
// color should always start as black
//change to answers array on click
  // answers array has {msg, color}