const PersonForm = (props) => {
    return(
        <form>
        <div>
          name: <input value={props.newName} onChange={props.updateName} /><br/>
          number: <input value={props.newPhone} onChange={props.updatePhone}/>
        </div>
        <div>
          <button type="submit" onClick={props.addPerson}>add</button>
        </div>
      </form>
    )
}
export default PersonForm