import React from 'react'
import './App.css';
import Navbar from './Component/Navbar/navbar';
import Home from './Component/pages/Home/home';
import { useState } from 'react';
function App() {
const [sideNavbar, setSideNavbar] = useState(true);
const setSideNavbarFunc=(value)=>{
  setSideNavbar(value)
}




  return (
    <div className="App">
       aman dfgfhjkkgfdfghhg
      <Navbar setSideNavbarFunc={setSideNavbarFunc} SideNavbar={sideNavbar}/>
      <Home sideNavbar={sideNavbar}/>
    </div>
  );
}

export default App;
