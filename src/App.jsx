// import { useState } from 'react'
import './App.css'
// import * as React from 'react';
import Navbar from './component/Navbar';
import Signin from './component/Signin';
import Signup from './component/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useEffect} from 'react';
import AddCourses from './component/addCourses';

function App() {
  // useEffect(()=>{
  //   fetch('http://localhost:3000/admin')
  //   .then(response=>response.json())
  //   .then(data=>console.log(data));
  // },[]);
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/addCourse" element={<AddCourses />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router> 
  )
}

export default App
