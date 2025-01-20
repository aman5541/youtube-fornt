import React, { useState } from 'react';
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SideNavbar from '../SideNavbar/sideNavbar';

const Navbar = ({setSideNavbarFunc,SideNavbar}) => {
  const [userPic, setUserPic] = useState(
    "https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
  );
  const [navbarModal, setNavbarModal] = useState(false);
  const handleClickModal =()=>{
    setNavbarModal(prev=>!prev);
  }
  const sideNavbarFunc=()=>{
    setSideNavbarFunc(!SideNavbar)
  }
  return (
    <div className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <div className="navbarHamberger" onClick={sideNavbarFunc}>
          <MenuIcon sx={{ color: "white" }} />
        </div>
        <div className="navbar_youtubeImage">
          <YouTubeIcon
            sx={{ fontSize: "34px", color: "red" }}
            className="navbar_youtubeImg"
          />
          <div className="navbar_utubeTitle">YouTube</div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="navbar-middle">
        <div className="navbar_searchBox">
          <input
            type="text"
            placeholder="Search"
            className="navbar_searchBoxInput"
          />
          <div className="navbar_searchIconBox">
            <SearchIcon sx={{ fontSize: "28px", color: "white" }} />
          </div>
        </div>
        <div className="navbar_mic">
          <MicIcon sx={{ fontSize: "28px", color: "white" }} />
        </div>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        < VideoCallIcon
          sx={{
            fontSize: "30px",
            cursor: "pointer",
            color: "white",
            marginRight: "15px",
          }}
        />
        < NotificationsNoneIcon
          sx={{
            fontSize: "30px",
            cursor: "pointer",
            color: "white",
            marginRight: "15px",
           }} />
        
        
         < img onClick={handleClickModal} src={userPic}
          className="navbar-right-logo"
          alt="logo" />


          { navbarModal &&
            <div className="navbar-modal">
              <div className="navbar-modal-option">Profile</div>
              <div className="navbar-modal-option">Logout</div>
              <div className="navbar-modal-option">Login</div>
            </div>
          }

      </div>
    </div>
  );
}

export default Navbar;
