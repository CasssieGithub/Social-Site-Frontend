import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Add from "./components/Add";
import Profile from "./components/Profile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const getUsers = () => {
    axios
      .get("http://localhost:3000/users/")
      .then(
        (response) => {
          setUsers(response.data);
        },
        (err) => console.log(err)
      )
      .catch((error) => console.log(error));
  };
  const getPost = () => {
    axios
      .get("http://localhost:3000/users/")
      .then(
        (response) => {
          setPosts(response.data);
        },
        (err) => console.log(err)
      )
      .catch((error) => console.log(error));
  };

  const handleCreateUser = (data) => {
    axios.post("http://localhost:3000/users", data).then((response) => {
      let newUser = [...users, response.data];
      setUsers(newUser);
      // send user to profile page.
      console.log(response.data);
      navigate(`/profile/${response.data._id}`);
    });
  };

  const handleDeleteUser = (deletedUser) => {
    axios
      .delete("http://localhost:3000/users/" + deletedUser._id)
      .then((response) => {
        let newUsers = users.filter((user) => {
          return user._id !== deletedUser._id;
        });
        setUsers(newUsers);
      });
  };

  const handleEditUser = (data) => {
    axios
      .put("http://localhost:3000/users/" + data._id, data)
      .then((response) => {
        let newUsers = users.map((user) => {
          return user._id !== data._id ? user : data;
        });
      });
  };

  const getPosts = () => {
    axios
      .get("http://localhost:3000/users/posts")
      .then(
        (response) => setPosts(response.data),
        (err) => console.log(err)
      )
      .catch((error) => console.log(error));
  };

  const handleCreatePost = (data) => {
    axios.post("http://localhost:3000/users/posts", data).then((response) => {
      let newPost = [...posts, response.data];
      setPosts(newPost);
      console.log(response.data);
    });
  };

  const handleDeletePost = (deletedPost) => {
    axios
      .delete("http://localhost:3000/users/posts/" + deletedPost._id)
      .then((response) => {
        let newPost = users.filter((post) => {
          return post._id !== deletedPost._id;
        });
        setPosts(newPost);
      });
  };

  const handleEditPost = (data) => {
    axios
      .put("http://localhost:3000/users/posts/" + data._id, data)
      .then((response) => {
        let newPost = users.map((post) => {
          return post._id !== data._id ? post : data;
        });
        setPosts(newPost);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route
            path="add"
            element={<Add handleCreateUser={handleCreateUser} />}
          />
          <Route
            path="profile/:userId"
            element={
              <Profile users={users} handleCreatePost={handleCreatePost} />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
