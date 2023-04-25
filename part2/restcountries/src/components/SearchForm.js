const SearchForm = ({handleSearch}) => {
    return(
        <>
        <form>
            <label>find countries</label>
            <input onChange={handleSearch}></input>
        </form>

        </>
    )
}

export default SearchForm