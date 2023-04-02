import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Add from "./components/Add";
import View from "./components/View";
import Profile from "./components/Profile";
import Post from "./components/Post";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const handleCreate = (data) => {
    axios.post("http://localhost:3000/users", data).then((response) => {
      let newUser = [...users, response.data];
      setUsers(newUser);
      // send user to profile page.
      console.log(response.data);
      navigate(`/profile/${response.data._id}`);
    });
  };

  const getUsers = () => {
    axios
      .get("http://localhost:3000/users/")
      .then(
        (response) => {
          // console.log(response.data);
          setUsers(response.data);
        },
        (err) => console.log(err)
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route path="add" element={<Add handleCreate={handleCreate} />} />
          <Route path="viewposts" element={<View />} />
          <Route path="profile/:userId" element={<Profile users={users} />} />
          <Route path="profile/:userId/post" element={<Post />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

// props.users.map;
// {
//   log.map((log) => {
//     return (
//       <>
//         <Log log={log} />
//         <Edit log={log} handleEdit={handleEdit} />
//         <br />

//         <div className="container">
//           <div className="PreviousMeals">
//             <button
//               onClick={() => {
//                 handleDelete(log);
//               }}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   });
// }
