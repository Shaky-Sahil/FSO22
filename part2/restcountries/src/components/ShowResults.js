const ShowResults = ({results,searchQuery,setResults}) => {
    if(results.length>10){
        return(
            <>
            too many matches, specify another filter
            </>
        )
    }
    return(
        <>
        {results.map((r)=>(<div>
            <span key={r.tld}>{r.name.common}</span>
            <button onClick={()=>setResults([r])}>show</button>
            </div>)
            
            )}
        </>
    )
}

export default ShowResults