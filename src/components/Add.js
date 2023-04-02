import React from "react";
import {useState} from 'react'
import { Link } from "react-router-dom";
import "./Add.css";

const Add = (props) => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    image: "",
    age: 0,
    gender: ""
  });

  const handleChange = (event) => {
    setUserProfile({ ...userProfile, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreateUser(userProfile);
    setUserProfile({
      name: "",
    });
  };

  return (
    <>
      <>
        <div>
          <h1>Create a profile here</h1>
        </div>
        <div>
        <Link to={'/'}>Home</Link>
        </div>
        <div className="container">
          <div className="addingANewUser">
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <label htmlFor="name">Name:</label>
                </div>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={userProfile.name}
                />
              </div>
              <div>
                <div>
                  <label htmlFor="name">Image:</label>
                </div>
                <input
                  type="url"
                  name="image"
                  onChange={handleChange}
                  value={userProfile.image}
                />
              </div>
              <div>
                <div>
                  <label htmlFor="name">Age:</label>
                </div>
                <input
                  type="text"
                  name="age"
                  onChange={handleChange}
                  value={userProfile.age}
                />
              </div>
              <div>
                <div>
                  <label htmlFor="name">Gender:</label>
                </div>
                <input
                  type="text"
                  name="gender"
                  onChange={handleChange}
                  value={userProfile.gender}
                />
              </div>
              <input type="submit" />
              {/* This link below will take you to the users new profile. */}
              {/* <Link to="/profile">Submit</Link> */}
            </form>
          </div>
        </div>
      </>
    </>
  )
  }

  export default Add