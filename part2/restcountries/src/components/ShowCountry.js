const ShowCountry = ({result,weather}) => {
const languages = Object.values(result.languages)
    console.log(weather.weather[0].icon)
    return(
        <>
        <h1>{result.name.common}</h1>
        <span>capital {result.capital}</span><br/>
        <span>area {result.area}</span><br/>
        <h3>languages:</h3>
        {languages.map((l)=>(<li>{l}</li>))}
        <br/>
        <img src={result.flags.png} alt='flag'></img>
        <div>temperature {weather.main.temp} Kelvin</div>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather'></img>
        <div>wind {weather.wind.speed} m/s</div>
        </>
    )
}

export default ShowCountry