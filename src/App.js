import "./App.css";
import {useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import axios from 'axios'
import Home from "./components/Home";
import Add from "./components/Add";
import View from "./components/View";

const App = () => {
  const [posts, setPosts] = useState([])

  const getPosts = () => {
    axios.get('http://localhost:3000/posts').then((response) => setPosts(response.data), (err) => console.log(err))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/posts', data).then((response) => {
      console.log(response);
      let newPosts = [...posts, response.data]
      setPosts(newPosts)
    })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home handleCreate={handleCreate}/>} />
        <Route path="add" element={<Add />} />
        <Route path="viewposts" element={<View />} />
      </Routes>
    </div>
  );
};

export default App;
