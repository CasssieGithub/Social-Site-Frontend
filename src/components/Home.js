import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  return (
    <>
      <div>
        <div className="outsidecontainer">
          <div className="innerContainer">
            <nav className="navBar">
              <div className="titleOfAppContainer">
                <h1 className="titleOfApp">Welcome to Social Site</h1>
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
                <div className="greeting">Hey!</div>
                Thanks for visiting our site. We are thrilled to have you join
                our community of like-minded individuals who share a passion for
                connecting with others from all walks of life.
                <br />
                <br />
                Our platform provides a safe and inclusive space for you to
                share your thoughts, ideas, and experiences with others, as well
                as discover new perspectives and engage in meaningful
                conversations. Whether you’re here to make new friends, network
                with professionals in your industry, or simply have some fun, we
                believe that our platform has something to offer to everyone.
                <br />
                <br />
                As a smaller company, we do appreciate feedback. Let us know how
                we could better your experience!
                <br />
                Enjoy!
              </p>
            </div>
          </div>
          <div className="textBetweenContainers">
            View profiles that recently joined!
          </div>
          <div className="containerToHoldUsersDisplayedOnHomePage">
            <div className="eachOfTheUsers">
              {props.users.map((user) => {
                return (
                  <>
                    <div className="individualUsers">
                      <Link
                        className="nameAndAgeOnHomePage"
                        to={`/profile/${user._id}`}
                      >
                        <img className="userImageOnHomePage" src={user.image} />
                        <div className="usersNameOnHomePage">{user.name}</div>
                        <div className="usersAgeOnHomePage">{user.age}</div>
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// something in the users.get is not working.
