<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
import {useState} from 'react'
import { Link } from "react-router-dom";

const Add = (props) => {
  const [posts, setPosts] = useState({text: '', image: '', link: ''})

  const handleChange = (event) => {
    setPosts({...posts, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(posts)
  }

  return (
    <div>
      <h1>Create a form here</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' onChange={handleChange}></input>
        <br/>
        <label htmlFor='name'>Image: </label>
        <input type='text' name='image' onChange={handleChange}></input>
        <br/>
        <label htmlFor='name'>Link: </label>
        <input type='text' name='link' onChange={handleChange}></input>
        <br/>
        <input type='submit'></input>
      </form>
      <Link to="/">Home</Link>
    </div>
=======
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
>>>>>>> ed95e19002e8ba9fed0da2975ee640667281f8f5
  );
};

export default Add;
=======
import React from "react";
>>>>>>> d6812082cf377918a91bea43d9a04df94fc152bf
