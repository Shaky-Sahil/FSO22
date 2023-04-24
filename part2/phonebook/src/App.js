import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import noteService from './services/notes'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('')
  const [message,setMessage] = useState('')
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
    if(isDuplicate(newName)){
      if(window.confirm(`${newName} is a already added to phonebook,replace old number with new number?`)){
        const valueToUpdate = persons.filter(p=>p.name===newPerson.name)
        const updateId = valueToUpdate[0].id
        noteService.updatePhone(updateId,newPerson)
        setMessage(`updated phone of ${newName}`)
        setTimeout(() => {
        setMessage('')
      }, 3000);
      }
    }
    else{
      noteService.create(newPerson).then(response=>setPersons(persons.concat(response)))
      setMessage(`added ${newName} to phonebook`)
      setTimeout(() => {
        setMessage('')
      }, 3000);
    }

    setNewName('')
    setNewPhone('')
  }

  const updatePhone = (e) => {
    setNewPhone(e.target.value)
  }

  const isDuplicate = (newName) => {
    const duplicates = persons.filter(p=>p.name === newName)
    console.log(duplicates)
    console.log(persons)
    return duplicates.length===0? false : true
  }
  const createFilter = (e) => {
    setShowAll(false)
    setFilter(e.target.value.toLowerCase())
    
  }

  const deletePhone = (id,name) => {
    if(window.confirm(`delete ${name}?`)){
      noteService.deleteItem(id)
      setMessage(`Deleted ${name} from phonebook`)
        setTimeout(() => {
        setMessage('')
      }, 3000);
    }
    
  }

 
  return (
    <div>
     <Notification message={message} /> 
      <h2>Phonebook</h2>
      <Filter handler={createFilter}/>
      <h2>add a new</h2>

      <PersonForm 
      newName={newName} updateName={updateName}
      newPhone={newPhone} updatePhone={updatePhone}
      addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePhone={deletePhone}/>
    </div>
  )
}

export default App