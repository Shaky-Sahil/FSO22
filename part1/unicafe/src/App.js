import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
        <Button handleClick={()=>setGood(good+1)} name='good' />
        <Button handleClick={()=>setNeutral(neutral+1)} name='neutral' />
        <Button handleClick={()=>setBad(bad+1)} name='bad' />
        <h1>statistics</h1>
        <span>good {good}</span><br/>
        <span>neutral {neutral}</span><br/>
        <span>bad {bad}</span><br/>
    </div>
  )
}

export default App