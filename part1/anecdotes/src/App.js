import { useState } from 'react'


const Maxvotes = (props) => {
  let max=0
  const findMaxVotes = () => {
    for(let i=0;i<props.votes.length;i++){
      if(props.votes[i]>props.votes[max]){
        max=i
      }
    }
    return max
   }
   return(
    <>
    <h1>Anecdote with most votes</h1>
    <div>{props.anecdotes[findMaxVotes()]}</div>
    </>
   )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const handleVote = () => {
    const newvotes = [...votes]
    newvotes[selected]++
    setVotes(newvotes)
    console.table(votes)
   }


   
   
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(Array(7).fill(0))
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/> 
      <button onClick={handleVote}>vote</button>
      <button onClick={()=>setSelected(Math.floor((Math.random() * 7)))}>next anecdote</button>
      <Maxvotes votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App