import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import "./Add.css";

const Add = (props) => {
  const [userProfile, setUserProfile] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setUserProfile({ ...userProfile, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(userProfile);
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
              <input type="submit" />
              {/* This link below will take you to the users new profile. */}
              {/* <Link to="/profile">Submit</Link> */}
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default Add;
