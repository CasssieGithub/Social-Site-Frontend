import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";

const Post = () => {
  let { userId } = useParams();
  return (
    <div>
      <Link to={`/profile/${userId}`}>My Profile</Link>
      <h1> Create a new post</h1>
    </div>
  );
};
export default Post;
