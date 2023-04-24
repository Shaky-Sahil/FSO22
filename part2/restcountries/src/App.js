import axios from "axios"
import SearchForm from "./components/SearchForm"
import { useState } from "react"
import ShowResults from "./components/ShowResults"

const App = () => {
  const [searchQuery,setSearchQuery] = useState('')
  const [results,setResults] = useState([])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    axios.get(`https://restcountries.com/v3.1/name/${searchQuery}`).then(
    (response) => {
      if(response.data.length >=10){
        console.log('too many results')
      }
      else{
        //console.log(response.data)
        setResults(response.data)
        //response.data.map((r)=>console.log(r.name))

      }
    }
    ).catch(
      ()=>console.log('not found')
    )
  }

  return(
    <div>
      <SearchForm handleSearch={handleSearch}/>
      <ShowResults results={results}/>

    </div>
  )
}

export default App