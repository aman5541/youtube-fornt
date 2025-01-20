import React from 'react'

import './home.css';

import SideNavbar from '../../SideNavbar/sideNavbar'
import HomePage from '../../HomePage/homePage'
const Home = ({sideNavbar}) => {
  return (
    <div className='home'>
      <SideNavbar sideNavbar={sideNavbar}/>
      <HomePage/>
    
    </div>
  )
}

export default Home
