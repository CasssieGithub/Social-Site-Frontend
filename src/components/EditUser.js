import {useState} from 'react'

const EditUser = (props) => {
    const [user, setUser] = useState({...props.user})

    const handleChange = (event) => {
        setUser({...user, [event.target.name] : event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(user)
    }
    return(
        <>
        {/* form for editing user */}
        <details>
            <summary>Edit User Profile</summary>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={handleChange} value={user.name} />
                <br/>
                <br/>
                <label htmlFor='name'>Image:</label>
                <input type='url' name='image' onChange={handleChange} value={user.image} />
                <br/>
                <br/>
                <label htmlFor='name'>Age:</label>
                <input type='number' name='age' onChange={handleChange} value={user.age} />
                <br/>
                <br/>
                <label htmlFor='name'>Gender:</label>
                <input type='text' name='gender' onChange={handleChange} value={user.gender} />
                <br/>
                <br/>
            </form>
        </details>
        </>
    )
}

export default EditUser