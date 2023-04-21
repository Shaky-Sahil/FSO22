import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import noteService from './services/notes'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('')
  const personsToShow = showAll? persons : persons.filter(p => p.name.toLowerCase().includes(filter))

  useEffect(
    () => {
    noteService.getAll().then(Response=>setPersons(Response))
    }
   ,[])

  const updateName = (e) => {
    setNewName(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = {name:newName,number:newPhone}
    checkDuplicate(newName) === true ? alert(`${newName} is a duplicate name`) : 
    noteService.create(newPerson)
    .then(response=>setPersons(persons.concat(response)))
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