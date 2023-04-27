import axios from "axios"
import SearchForm from "./components/SearchForm"
import { useEffect, useState } from "react"
import ShowResults from "./components/ShowResults"
import ShowCountry from "./components/ShowCountry"

const App = () => {
  const [searchQuery,setSearchQuery] = useState('')
  const [results,setResults] = useState([])
  const [weather,setWeather] = useState({})

  useEffect(()=>{
    const controller = new AbortController();
    axios.get(`https://restcountries.com/v3.1/name/${searchQuery}`,
    {signal:controller.signal}).then(
    (response) => {
      getWeatherData(response.data[0])
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

  const getWeatherData = (result) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${result.latlng[0]}&lon=${result.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}`
    return axios.get(url).then((r)=>setWeather(r.data)).catch(()=>setWeather({}))
  }

  return(
    <div>
      <SearchForm handleSearch={handleSearch}/>
      {results.length===1?<ShowCountry result={results[0]} weather={weather}/>
      :
      <ShowResults results={results} searchQuery={searchQuery} setResults={setResults}/>}

    </div>
  ) 
}

export default App
