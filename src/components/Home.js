import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Social Site</h1>
      <Link className="createAPostLink" to="add">
        Create a post
      </Link>
      <Link className="viewPostsLink" to="viewposts">
        View Posts
      </Link>
    </div>
  );
};

export default Home;
