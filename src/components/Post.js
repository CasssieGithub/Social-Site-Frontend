import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";
import "./Post.css";
import { useState, useEffect } from "react";

const Post = (props) => {
<<<<<<< HEAD
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

=======
>>>>>>> f6274dbd5c01dc5b42d8076fcc68ed0ce7959549
  let { userId } = useParams();
  const [post, setPost] = useState({
    userId: { userId },
    date: "",
    text: "",
  });

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreatePost(post);
    setPost({
      userId: "",
      date: "",
      text: "",
    });
  };

  return (
    <div>
      {/* <Link to={`/profile/${userId}`}>My Post</Link> */}
      <h1> Create a new post</h1>
<<<<<<< HEAD
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
=======
      <form onSubmit={handleSubmit}>
        <div className="containsCreateANewPost">
          <div className="dateOnProfilePage">
            <div>
              <label htmlFor="date">Date:</label>
            </div>
            <input
              className="dateInputOnProfilePage"
              type="text"
              name="date"
              onChange={handleChange}
              value={post.date}
            />
          </div>
          <div className="nameOnProfilePage">
            <div>
              <label htmlFor="userId">User Id:</label>
            </div>
            <input
              className="nameInputOnProfilePage"
              type="text"
              name="userId"
              onChange={handleChange}
              value={post.userId}
            />
          </div>
          <div className="textOnProfilePage">
            <div>
              <label htmlFor="text">Post:</label>
            </div>
            <textarea
              className="textInputOnProfilePage"
              type="text"
              name="text"
              onChange={handleChange}
              value={post.text}
            ></textarea>
          </div>
          <button>Like Button</button>
          <div className="submitBtnContainerOnProfilePage">
            <input className="submitBtnOnProfilePage" type="submit" />
          </div>
        </div>
      </form>
>>>>>>> f6274dbd5c01dc5b42d8076fcc68ed0ce7959549
    </div>
  );
};
export default Post;
