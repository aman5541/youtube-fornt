import React from 'react'
import './videoUpload.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from 'react-router-dom';
const VideoUpload = () => {
  return (
    <div className='videoUpload'>
        <div className="uploadBox">
            <div className="uploadVideoTitle">
               < YouTubeIcon sx={{ fontSize: "54px", color: "red" }}/>
                Upload Video
           
            </div>
            <div className="uploadForm">
               <input type='text' placeholder='Title of Video' className='uploadFormInputs'/> 
               <input type='text' placeholder='Description' className='uploadFormInputs'/> 
               <input type='text' placeholder='Category' className='uploadFormInputs'/> 
                <div>Thumbnail <input type='file' accept='image/*'/></div>
                <div>Video <input type='file' accept='video/mp4, video/webm, video/*'/></div>
            
            
            </div>
             <div className="UploadBtns">
                <div className="uploadBtn-form">Upload</div>
                <Link to= {'/'} className="uploadBtn-form">Home</Link>
             </div>
        </div>
      
    </div>
  )
}

export default VideoUpload
