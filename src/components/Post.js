import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";
import "./Post.css";
import { useState, useEffect } from "react";

const Post = (props) => {
  let { userId } = useParams();
  const [post, setPost] = useState({
    userId: userId,
    date: "",
    text: "",
  });

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(post);
    props.handleCreatePost(post);
    setPost({
      userId: userId,
      date: "",
      text: "",
    });
  };

  return (
    <div>
      {/* <Link to={`/profile/${userId}`}>My Post</Link> */}
      <h1> Create a new post</h1>
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
          <div className="nameOnProfilePage"></div>
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
          <div className="submitBtnContainerOnProfilePage">
            <input className="submitBtnOnProfilePage" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Post;
