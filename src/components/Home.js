import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = (props) => {
  return (
    <>
      <div>
        <div className="container">
          <div className="innerContainer">
            <nav className="navBar">
              <div className="title">
                <h1>Welcome to Social Site</h1>
              </div>
              <Link className="createAUserLink" to="add">
                Create an account
              </Link>
              {/* This code will be used for the view profilessss? or the users profile? . Do not erase. */}
              {/* <Link className="viewPostsLink" to="viewposts">
              View Postss
            </Link> */}
            </nav>
            <div className="containerForIntro">
              <p className="intro">
                Hello there, welcome to our site!
                <br /> Thanks for visiting our site. We are thrilled to have you
                join our community of like-minded individuals who share a
                passion for connecting with others from all walks of life. Our
                platform provides a safe and inclusive space for you to share
                your thoughts, ideas, and experiences with others, as well as
                discover new perspectives and engage in meaningful
                conversations. Whether you’re here to make new friends, network
                with professionals in your industry, or simply have some fun, we
                believe that our platform has something to offer to everyone. As
                a smaller company, we do appreciate feedback. So, please let us
                know how we could better your experience! Enjoy!
              </p>
            </div>
          </div>
        </div>
      </div>
      {props.users.map((user) => {
        return (
          <>
            <Link to={`/profile/${user._id}`}>{user.name}</Link>
          </>
        );
      })}
    </>
  );
};

export default Home;
