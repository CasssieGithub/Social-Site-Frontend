import React from "react";
import { Link } from "react-router-dom";

const View = (props) => {
  return (
    <div>
      <h1>View posts here</h1>

      <div>
        <h3>Posts: {props.posts.name}</h3>
      </div>

      <Link to="/">Home</Link>
    </div>
  );
};

export default View;
