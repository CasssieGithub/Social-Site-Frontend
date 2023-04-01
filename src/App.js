import "./App.css";
import {useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import View from "./components/View";
import Profile from "./components/Profile";
import Post from "./components/Post";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = () => {
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
