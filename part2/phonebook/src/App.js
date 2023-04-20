import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('enter name')

  const updateName = (e) => {
    setNewName(e.target.value)
  }

  const addName = (e) => {
    e.preventDefault()
    console.log("default prevented")
    const newPerson = {name:newName}
    console.log(newPerson)
    setPersons(persons.concat(newPerson))
    setNewName('enter name')
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
      {persons.map((p,i)=><li key={i}>{p.name}</li>)}
    </div>
  )
}

export default App