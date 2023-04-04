import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Add.css";

const Add = (props) => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    gender: "",
    age: "",
    image: "",
    bio: "",
  });

  const handleChange = (event) => {
    setUserProfile({ ...userProfile, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreateUser(userProfile);
    setUserProfile({
      name: "",
      gender: "",
      age: "",
      image: "",
      bio: "",
    });
  };

  return (
    <>
      <>
        <div className="container">
          <div className="createProfileTitle">
            <h1>Create a profile</h1>
            <div className="instructionsToFillOutProfileInformation">
              In order to create your profile we need some personal information.
              <br />
              Please fill in the following information to start your new
              profile.
              <br />
              This information can be changed later.
            </div>
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
              </form>
            </div>
            <div className="alreadyHaveAnAccountLinkContainer">
              <Link className="alreadyHaveAnAccountLink" to="/">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default Add;
