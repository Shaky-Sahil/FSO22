import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

const StatisticLine = (props) => {
  return(
    <>
  <span>{props.text} {props.value}</span>
    </>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad)/all
  const positive = props.good*100/all
  if(all===0){
    return(
      <>
      <h1>statistics</h1> 
      <span>No feedback given</span>
      </>
      )
  }
  else{
  return(
    <>

    <h1>statistics</h1> 
        <StatisticLine text='good' value={props.good} /><br/>
        <StatisticLine text='neutral' value={props.neutral} /><br/>
        <StatisticLine text='bad' value={props.bad} /><br/>
        <StatisticLine text='all' value={all} /><br/>
        <StatisticLine text='average' value={average} /><br/>
        <StatisticLine text='positive' value={positive} />%<br/>

    </>
  )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>give feedback</h1>
        <Button handleClick={() => setGood(good+1)} name='good' />
        <Button handleClick={() => setNeutral(neutral+1)} name='neutral' />
        <Button handleClick={() => setBad(bad+1)} name='bad' />
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App