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
    </div>
  );
};
export default Profile;
