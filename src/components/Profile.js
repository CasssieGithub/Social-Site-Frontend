import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";
import "./Profile.css";
import Post from "./Post";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = (props) => {
  let { userId } = useParams();

  const findUserById = props.users.find((user) => {
    return userId === user._id;
  });

  const findPostByUserId = props.posts.filter((post) => {
    return userId === post.userId;
  });
  console.log(findPostByUserId);

  return (
    <div>
      <div className="containerOnProfilePage">
        <nav className="profilePageNavBar">
          <div className="titleOfAppOnProfilePageContainer">
            <div className="titleOfAppOnProfilePage">Social Site</div>
          </div>
          <div>
            <Link className="homeLinkOnProfilePage" to="/">
              Home
            </Link>

            {/* <Link
              className="addAPostLinkOnProfilePage"
              to={`/profile/${userId}/post`}
            >
              Add a post
            </Link> */}
          </div>
        </nav>

        {findUserById ? (
          <>
            <h1 className="greetingOnProfilePage">
              {" "}
              Hello, {findUserById.name}!
            </h1>
            <div className="containsbothLeftAndRightSideOfProfilePage">
              <div className="containsImageOnLeftProfilePage">
                <img className="imageOnProfilePage" src={findUserById.image} />
              </div>

              <div className="containsNameGenderAgeBioOnRightProfilePage">
                <div className="innerContainerOnProfilePage">
                  <div className="nameOnProfilePage">
                    {findUserById.name}, {findUserById.age}
                  </div>
                  <div className="genderOnProfilePage">
                    {findUserById.gender}
                  </div>
                  <br />
                  {/* <div className="ageOnProfilePage"> {findUserById.age}</div> */}
                  <div className="bioOnProfilePage">{findUserById.bio}</div>
                  <br />
                  <Post handleCreatePost={props.handleCreatePost} />
                </div>
              </div>
            </div>

            <div className="containsAllThePosts">
              posts here
              {props.posts.map((post) => {
                return (
                  <>
                    <div>
                      <div>{post.userId}</div>
                      <div>{post.date}</div>
                      <div>{post.text}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};
export default Profile;
