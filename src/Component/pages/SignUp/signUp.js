import React,{useState} from 'react'
import './signUp.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
const SignUp = () => {


    const [signUpField , setsignUpField]= useState({"ChannelName":"","UserName":"" ,"password":"", "about":"", "profilePic":"" });
    const [uploadedImageUrl, setUploadedImageUrl] = useState("https://designshack.net/wp-content/uploads/Youlit-Bold-YouTube-Title-Font.jpg");
    
    console.log(signUpField)
    
    
        const handleOnChangeInput =(event,name)=>{
            setsignUpField({
                ...signUpField,[name]:event.target.value
            })
        }


  return (
    <div className='signUp'>
      <div className="signUp-card">
        <div className="signUp-title">
          <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
          SignUp
        </div>



        <div className="signUp-Inputs">
          
            <input type="text"value={signUpField.ChannelName} onChange={(e)=>handleOnChangeInput(e,"ChannelName")} className='signUp-Inputs-inp' placeholder='Channel Name'/>
        
            <input type="text" className='signUp-Inputs-inp'  value={signUpField.UserName} onChange={(e)=>handleOnChangeInput(e,"UserName")}  placeholder='User Name'/>
            <input type="password" className='signUp-Inputs-inp' value={signUpField.password} onChange={(e)=>handleOnChangeInput(e,"password")} placeholder='Password'/>
            <input type="text" className='signUp-Inputs-inp' value={signUpField.about} onChange={(e)=>handleOnChangeInput(e,"about")} placeholder='About Your Channel '/>
           
            <div className="image-upload-signup">
                <input type='file'/>
                <div className="image-upload-signup-div">
                   <img src={uploadedImageUrl}
                    alt="Profile" className="image-default-signUp" />
                   


                </div>

             </div>

             <div className="signUpBtns">
               <div className="signUpBtn">SignUp</div> 
               <Link to={'/'}className="signUpBtn">Home Page</Link> 

             </div>
       
        </div>
      </div>
    </div>
  );
}

export default SignUp;


