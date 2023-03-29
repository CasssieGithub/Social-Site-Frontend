import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import View from "./components/View";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<Add />} />
        <Route path="viewposts" element={<View />} />
      </Routes>
    </div>
  );
};

export default App;
