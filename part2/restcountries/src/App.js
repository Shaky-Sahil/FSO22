import axios from "axios"
import SearchForm from "./components/SearchForm"
import { useEffect, useState } from "react"
import ShowResults from "./components/ShowResults"
import ShowCountry from "./components/ShowCountry"

const App = () => {
  const [searchQuery,setSearchQuery] = useState('')
  const [results,setResults] = useState([])

  useEffect(()=>{
    const controller = new AbortController();
    axios.get(`https://restcountries.com/v3.1/name/${searchQuery}`,
    {signal:controller.signal}).then(
    (response) => {
        setResults(response.data)

    }
    ).catch(
      ()=>{console.log('not found')
      setResults([])
    }
    )
  },[searchQuery])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    
  }

  return(
    <div>
      <SearchForm handleSearch={handleSearch}/>
      {results.length===1?<ShowCountry result={results[0]}/>
      :
      <ShowResults results={results} searchQuery={searchQuery}/>}

    </div>
  ) 
}

export default App