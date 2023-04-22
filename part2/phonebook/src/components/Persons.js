const Persons = ({personsToShow,deletePhone}) => {
    return(
        <div>
        {personsToShow.map(p=>(<li key={p.name}>{p.name} {p.number}
        <button onClick={()=>deletePhone(p.id)}>delete</button></li>
            ))}
        </div>
    )
}
export default Persons