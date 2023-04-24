const SearchForm = ({handleSearch}) => {
    return(
        <>
        <form>
            <label>find countries</label>
            <input on={handleSearch}></input>
        </form>

        </>
    )
}

export default SearchForm