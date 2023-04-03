const User = (props) => {
    return(
        <>
            <h3>Name: {props.user.name}</h3>
            <img src={props.user.image}></img>
            <p>Age: {props.user.age}</p>
            <p>Gender: {props.user.gender}</p>
        </>
    )
}

export default User