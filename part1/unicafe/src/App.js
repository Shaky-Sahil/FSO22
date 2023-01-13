import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

const StatisticLine = (props) => {
  return(
    <>
  <td>{props.text} {props.value}</td>
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
        <table>
          <tbody>
          <tr>
        <StatisticLine text='good' value={props.good} />
          </tr>
          <tr>
        <StatisticLine text='neutral' value={props.neutral} />
        </tr>
        <tr>
        <StatisticLine text='bad' value={props.bad} />
        </tr>
        <tr>
        <StatisticLine text='all' value={all} />
        </tr>
        <tr>
        <StatisticLine text='average' value={average} />
        </tr>
        <tr>
        <StatisticLine text='positive' value={positive} />%
        </tr>
        </tbody>
        </table>
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