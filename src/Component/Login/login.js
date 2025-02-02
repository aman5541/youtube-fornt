import React from 'react'
import './login.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
const Login = ({setLoginModal}) => {
  return (
    <div className='login'>
        <div className="login-card">
            <div className="titleCard-login">
            < YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
              Login

            </div>
            <div className="loginCredentials">
                <div className="userNameLogin">
               <input type='text' placeholder='userName' className='userNameLoginUserName'/> 
               <input type='password' placeholder='Password' className='userNameLoginUserName'/> 
               </div>
            </div>


            <div className="login-buttons">
                <div className="login-btn">Login</div>
                <Link  to = {'/signUp'}   onClick={()=>setLoginModal()} className="login-btn">Singup</Link>
                <div className="login-btn" onClick={()=>setLoginModal()}>Cancel</div>
            </div>
        </div>
      
    </div>
  )
}

export default Login
