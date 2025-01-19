import React from 'react'
import './navbar.css';
import MenuIcon from  '@mui/icons-material/Menu';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <div className="navbarHamberger">
            <MenuIcon/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
