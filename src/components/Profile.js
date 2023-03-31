import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";

const Profile = (props) => {
  let { userId } = useParams();

  // find the user by userID
  // console.log(userId, props.users);

  const findUserById = props.users.find((user) => {
    return userId === user._id;
  });

  console.log(findUserById);

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to={`/profile/${userId}/post`}>Add a post</Link>
      <h1> welcome to your profile</h1>
    </div>
  );
};
export default Profile;
