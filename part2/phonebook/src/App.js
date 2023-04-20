import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const updateName = (e) => {
    setNewName(e.target.value)
  }

  const addName = (e) => {
    e.preventDefault()
    const newPerson = {name:newName}
    console.log(newPerson)
    checkDuplicate(newName) === true ? alert(`${newName} is a duplicate name`) : setPersons(persons.concat(newPerson))
    
    setNewName('')
  }

  const checkDuplicate = (newName) => {
    const duplicates = persons.filter(p=>p.name === newName)
    return duplicates.length===0? false : true
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={updateName} />
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p)=><li key={p.name}>{p.name}</li>)}
    </div>
  )
}

export default App