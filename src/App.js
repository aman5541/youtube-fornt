import React from 'react'
import './App.css';
import Navbar from './Component/Navbar/navbar';
import Home from './Component/pages/Home/home';
import { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import Video from './Component/pages/Video/video';
import Profile from './Component/pages/Profile/profile';
import VideoUpload from './Component/pages/VideoUpload/videoUpload';
import SignUp from './Component/pages/SignUp/signUp';
function App() {
const [sideNavbar, setSideNavbar] = useState(true);
const setSideNavbarFunc=(value)=>{
  setSideNavbar(value)
}




  return (
    <div className="App">
       
      <Navbar setSideNavbarFunc={setSideNavbarFunc} SideNavbar={sideNavbar}/>
      <Routes>
        
        <Route path='' element={ <Home sideNavbar={sideNavbar}/>}/>
        <Route path='/watch/:id' element={ < Video/>} />
        <Route path='/user/:id' element={ < Profile  sideNavbar={sideNavbar}/>} />
        <Route path='/:id/upload' element={ < VideoUpload />} />
        <Route path='/signup' element={ <SignUp/>} />
      </Routes>
     
    </div>
  );
}

export default App;
