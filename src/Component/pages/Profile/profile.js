import React from 'react'
import './profile.css';
import SideNavbar from '../../SideNavbar/sideNavbar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {Link} from 'react-router-dom';
const Profile = ({sideNavbar}) => {
  return (
    <div className='profile'>
      <SideNavbar sideNavbar={sideNavbar}/>

      <div className={sideNavbar?"profile-page" : "profile-page-inactive"}>


        <div className="profile-top-section">
            <div className="profile-top-section-profile">
                <img className='profile-top-section-img' src="https://th.bing.com/th?id=OIP.L8bs33mJBAUBA01wBfJnjQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
    
            </div>
            <div className="profile-top-section-About">
                <div className="profile-top-section-About-Name">Aman Singh</div>
                 <div className="profile-top-section-info">
                    @Aman1   . 4 videos
                 </div>
                 <div className="profile-top-section-info">
                    About Section of channel
                 </div>
            
            </div>

        </div>
         
         <div className="profile-videos">
            <div className="profile-videos-title">Videos &nbsp; <ArrowRightIcon/></div>
            

            <div className="profileVideos">
                <div className="profileVideo-block">
                <Link to ={'/watch/1810'} className="youtube-Video">
          <div className="youtube-thumbnailBox">
            <img
              src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              28:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="https://designshack.net/wp-content/uploads/Youlit-Bold-YouTube-Title-Font.jpg"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </Link>
                </div>

                <div className="profileVideo-block">
                <Link to ={'/watch/1810'} className="youtube-Video">
          <div className="youtube-thumbnailBox">
            <img
              src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              28:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="https://designshack.net/wp-content/uploads/Youlit-Bold-YouTube-Title-Font.jpg"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </Link>
                </div>

                <div className="profileVideo-block">
                <Link to ={'/watch/1810'} className="youtube-Video">
          <div className="youtube-thumbnailBox">
            <img
              src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              28:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="https://designshack.net/wp-content/uploads/Youlit-Bold-YouTube-Title-Font.jpg"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </Link>
                </div>

                <div className="profileVideo-block">
                <Link to ={'/watch/1810'} className="youtube-Video">
          <div className="youtube-thumbnailBox">
            <img
              src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              28:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="https://designshack.net/wp-content/uploads/Youlit-Bold-YouTube-Title-Font.jpg"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </Link>
                </div>

                <div className="profileVideo-block">
                <Link to ={'/watch/1810'} className="youtube-Video">
          <div className="youtube-thumbnailBox">
            <img
              src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              28:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="https://designshack.net/wp-content/uploads/Youlit-Bold-YouTube-Title-Font.jpg"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </Link>
                </div>

                <div className="profileVideo-block">
                <Link to ={'/watch/1810'} className="youtube-Video">
          <div className="youtube-thumbnailBox">
            <img
              src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              28:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="https://designshack.net/wp-content/uploads/Youlit-Bold-YouTube-Title-Font.jpg"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </Link>
                </div>
            </div>
         
         
         </div>

      </div>
    </div>
  )
}

export default Profile
