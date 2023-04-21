const Persons = ({personsToShow}) => {
    return(
        <div>
        {personsToShow.map((p)=><li key={p.name}>{p.name} {p.phone}</li>) }
        </div>
    )
}
export default Persons