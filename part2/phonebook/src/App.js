import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '9194' },
    { name: 'james jones', phone: '9194' },
    { name: 'kobe', phone: '9194' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('')
  const personsToShow = showAll? persons : persons.filter(p => p.name.toLowerCase().includes(filter))

  const updateName = (e) => {
    setNewName(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = {name:newName,phone:newPhone}
    console.log(newPerson)
    checkDuplicate(newName) === true ? alert(`${newName} is a duplicate name`) : setPersons(persons.concat(newPerson))
    setNewName('')
    setNewPhone('')
  }

  const updatePhone = (e) => {
    setNewPhone(e.target.value)
  }

  const checkDuplicate = (newName) => {
    const duplicates = persons.filter(p=>p.name === newName)
    return duplicates.length===0? false : true
  }
  const createFilter = (e) => {
    setShowAll(false)
    setFilter(e.target.value.toLowerCase())
    
  }

 
  return (
    <div>

      <h2>Phonebook</h2>
      <Filter handler={createFilter}/>
      <h2>add a new</h2>
      
      <PersonForm 
      newName={newName} updateName={updateName}
      newPhone={newPhone} updatePhone={updatePhone}
      addPerson={addPerson}
      />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App