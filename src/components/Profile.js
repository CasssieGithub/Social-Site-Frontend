import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";
import "./Profile.css";
import Post from "./Post";
import EditPost from "./EditPost";
// import { useState, useEffect } from "react";
// import axios from "axios";

const Profile = (props) => {
  let { userId } = useParams();

  const findUserById = props.users.find((user) => {
    return userId === user._id;
  });

  const findPostByUserId = props.posts.filter((post) => {
    return userId === post.userId;
  });
  // console.log(findPostByUserId);

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
                <button className="textUnderImage"> Edit profile</button>
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
                  <Post
                    handleCreatePost={props.handleCreatePost}
                    handleDeletePost={props.handleDeletePost}
                  />
                </div>
              </div>
            </div>
            <>
              <div className="containsAllThePosts">
                <div className="containerAroundPosts">
                  {findPostByUserId.map((post) => {
                    return (
                      <>
                        <div className="holdingAllPostIndividually">
                          <div className="dateAndtextOnProfilePage">
                            <div className="dateOnProfilePage">{post.date}</div>
                            <br />
                            <div className="postOnProfilePage">{post.text}</div>
                          </div>
                          <div className="deleteBtnOnProfilePageContainer">
                            <button
                              className="deleteBtnOnProfilePage"
                              onClick={() => {
                                props.handleDeletePost(post);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                          <div className="editBtnOnProfilePage">
                            <EditPost
                              post={post}
                              handleEditPost={props.handleEditPost}
                            />
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};
export default Profile;
