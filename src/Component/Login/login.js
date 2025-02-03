import React ,{useState}from 'react'
import './login.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
const Login = ({setLoginModal}) => {

    const [loginField , setLoginField]= useState({"userName":"","password":""});
    console.log(loginField)


    const handleOnChangeInput =(event,name)=>{
        setLoginField({
            ...loginField,[name]:event.target.value
        })
    }






  return (
    <div className='login'>
        <div className="login-card">
            <div className="titleCard-login">
              <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
              Login

            </div>
            <div className="loginCredentials">
                <div className="userNameLogin">
               <input type='text'  value={loginField.userName} onChange={(e)=>handleOnChangeInput(e,"userName")} placeholder='userName' className='userNameLoginUserName'/> 
               <input type='password' value={loginField.password}  onChange={(e)=>handleOnChangeInput(e,"password")} placeholder='Password' className='userNameLoginUserName'/> 
               </div>
            </div>


            <div className="login-buttons">
                <div className="login-btn">Login</div>
                <Link to={'/signup'}   onClick={()=>setLoginModal()} className="login-btn">SignUp</Link>
                <div className="login-btn" onClick={()=>setLoginModal()}>Cancel</div>
            </div>
        </div>
      
    </div>
  )
}

export default Login
