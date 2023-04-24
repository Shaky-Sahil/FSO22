const Notification = ({message}) => {
    if(message===''){
        return null
    }

    return (
        <div className="msg">
        the message is : {message}
        </div>
    )
}

export default Notification