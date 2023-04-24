const ShowResults = ({results}) => {
    return(
        <>
        {results.map((r)=><li>{r.name.official}</li>)}
        </>
    )
}

export default ShowResults