import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";

const Post = (props) => {
  const [userPost, setUserPost] = useState({
    text: '',
    image: '',
    link: ''
  })

  const handleChange = (event) => {
    setUserPost({ ...userPost, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreatePost(userPost);
  };

  let { userId } = useParams();
  return (
    <div>
      <Link to={`/profile/${userId}`}>My Profile</Link>
      <h1> Create a new post</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Text</label>
          <input type='text' name='text' onChange={handleChange} placeholder='share your thoughts' value={userPost.text} />
          <br/>
          <br/>
          <label htmlFor='name'>Image</label>
          <input type='url' name='image' onChange={handleChange} />
          <br/>
          <br/>
          <label htmlFor='name'>link</label>
          <input type='url' name='link' onChange={handleChange} />
          <br/>
          <br/>
          <input type='submit' />
        </form>
      </div>
    </div>
  );
};
export default Post;
