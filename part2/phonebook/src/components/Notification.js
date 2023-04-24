const Notification = ({message,isFail}) => {
    if(message===''){
        return null
    }
    if(isFail){
        return(
            <div className="neg-msg">
        {message}
        </div>
        )
    }
    else{
        return(
            <div className="msg">
        {message}
        </div>
        )
    }
}

export default Notification