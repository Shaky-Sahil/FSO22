const ShowResults = ({results,searchQuery}) => {
    if(results.length>10){
        return(
            <>
            too many matches, specify another filter
            </>
        )
    }
    return(
        <>
        {results.map((r)=><li key={r.tld}>{r.name.common}</li>)}
        </>
    )
}

export default ShowResults