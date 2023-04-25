const ShowCountry = ({result}) => {
    const languages = Object.values(result.languages)
    return(
        <>
        <h1>{result.name.common}</h1>
        <span>capital {result.capital}</span><br/>
        <span>area {result.area}</span><br/>
        <h3>languages:</h3>
        {languages.map((l)=>(<li>{l}</li>))}
        <br/>
        <img src={result.flags.png} alt='flag'></img>
        </>
    )
}

export default ShowCountry