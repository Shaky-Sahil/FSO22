const Persons = ({personsToShow}) => {
    return(
        <div>
        {personsToShow.map(p=>(<li>{p.name} {p.number}</li>))}
        </div>
    )
}
export default Persons