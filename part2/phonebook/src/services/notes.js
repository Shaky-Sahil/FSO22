import axios from "axios";

const getAll = () => {
   return axios.get('http://localhost:3001/persons').then(Response=>Response.data)
}

const create = (newPerson) => {
    return axios.post('http://localhost:3001/persons',newPerson).then(Response=>Response.data)
}

const deleteItem = (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`)
}
const noteService = {getAll,create,deleteItem}
export default noteService