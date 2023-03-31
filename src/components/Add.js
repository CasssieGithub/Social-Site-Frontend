import React from "react";
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
  );
};

export default Add;
