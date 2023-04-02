import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import "./Add.css";

const Add = (props) => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    age: "",
    image: "",
  });

  const handleChange = (event) => {
    setUserProfile({ ...userProfile, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(userProfile);
    setUserProfile({
      name: "",
      age: "",
      image: "",
    });
  };

  return (
    <>
      <>
        <div className="container">
          <div className="createProfileTitle">
            <h1>Create a profile</h1>
          </div>
          <div className="containerforInputInformation">
            <div className="addingANewUser">
              <form
                className="containsLeftRightAndSubmit"
                onSubmit={handleSubmit}
              >
                <div className="containsBothLeftAndRightSides">
                  <div className="leftSideOfPageContainer">
                    <div className="leftSideOfPageName">
                      <div className="name">
                        <div>
                          <label htmlFor="name">Name:</label>
                        </div>
                        <input
                          className="nameInput"
                          type="text"
                          name="name"
                          onChange={handleChange}
                          value={userProfile.name}
                        />
                      </div>
                    </div>

                    <div className="leftSideOfPageGender">
                      <div className="gender">
                        <div>
                          <label htmlFor="gender">Gender:</label>
                        </div>
                        <input
                          className="genderInput"
                          type="text"
                          name="gender"
                          onChange={handleChange}
                          value={userProfile.gender}
                        />
                      </div>
                    </div>
                    <div className="leftSideOfPageImage">
                      <div className="image">
                        <div>
                          <label htmlFor="image">Image:</label>
                        </div>
                        <input
                          className="imageInput"
                          type="text"
                          name="image"
                          onChange={handleChange}
                          value={userProfile.image}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rightSideOfPageContainer">
                    <div className="rightSideOfPageAge">
                      <div className="age">
                        <div>
                          <label htmlFor="age">Age:</label>
                        </div>
                        <input
                          className="ageInput"
                          type="text"
                          name="age"
                          onChange={handleChange}
                          value={userProfile.age}
                        />
                      </div>
                    </div>
                    <div className="rightSideOfPageBio">
                      <div className="bio">
                        <div>
                          <label htmlFor="bio">Bio:</label>
                        </div>
                        <textarea
                          className="bioTextArea"
                          name="bio"
                          onChange={handleChange}
                          value={userProfile.bio}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submitBtnContainer">
                  <input className="submitBtn" type="submit" />
                </div>
                {/* This link below will take you to the users new profile. */}
                {/* <Link to="/profile">Submit</Link> */}
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Add;
