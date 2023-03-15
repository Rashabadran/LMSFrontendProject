import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
// import Levels from '../src/pages/levels/levels';
// import Sections from '../src/pages/sections/sections';
import { useEffect, useState } from "react";
import "./App.css";

import Course from "./components/course";

function App() {
  
  return (
    <div className="all">
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home/>}/> */}
        {/* <Route path="/levels" element={<Levels/>}/> */}
        <Route path="/Course" element={<Course/>}/>
        {/* <Route path="/sections" element={<Sections/>}/> */}
      </Routes>
      
    </Router>
    </div>
  );
  }

export default App;