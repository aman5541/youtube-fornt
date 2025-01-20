import React from 'react'
import HomeIcon from '@mui/icons-material/Home' ; // Import HomeIcon
import './sideNavbar.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ContentCutIcon from '@mui/icons-material/ContentCut';


const SideNavbar = ({sideNavbar}) => {
  return (
       <div className={sideNavbar?"home-sideNavbar":"homeSideNavbarHide"}>
            <div className="home-sideNavbarTop">  {/* Fixed class name */}
               <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
                 <HomeIcon />
                  <div className="home-sideNavbarTopOptionTitle">Home</div>
               </div>
                <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
                 <VideocamIcon />
                  <div className="home-sideNavbarTopOptionTitle">Shorts</div>
                </div>
                <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
                 <SubscriptionsIcon />
                  <div className="home-sideNavbarTopOptionTitle">Subscription</div>
                </div>
           </div>

           <div className="home-sideNavbarMiddle">
           <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
           <div  className="home-sideNavbarTopOptionTitle">You</div>
                 <ChevronRightIcon />
                
                </div>
                <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
                 <HorizontalSplitIcon />
                  <div className="home-sideNavbarTopOptionTitle">Your channel</div>
               </div>
               <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
                 <HistoryIcon />
                  <div className="home-sideNavbarTopOptionTitle">History</div>
               </div>
               <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
                 <PlaylistAddIcon/>
                  <div className="home-sideNavbarTopOptionTitle">Playlists</div>
               </div>
               <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
                 <VideoLibraryIcon  />
                  <div className="home-sideNavbarTopOptionTitle">Your videos</div>
               </div>
               <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
                 <WatchLaterIcon />
                  <div className="home-sideNavbarTopOptionTitle">Watch later</div>
               </div>
               <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
                 <ThumbUpIcon />
                  <div className="home-sideNavbarTopOptionTitle">Liked videos</div>
               </div>
               <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
                 <ContentCutIcon />
                  <div className="home-sideNavbarTopOptionTitle">Your clips</div>
               </div>
           </div>


           <div className="home-sideNavbarMiddle">
                <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
                        <div  className="home-sideNavbarTopOptionTitleHeader">Subscription</div>
                
                
                </div>

                <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
                   <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png" alt="" className="home-sideNavbar-ImgLogo" />
                   <div className="home-sideNavbarTopOptionTitle">Aaj Tak</div>
                </div>
                <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
                   <img src="https://edurank.org/assets/img/uni-logos/gla-university-logo.png" alt="" className="home-sideNavbar-ImgLogo" />
                   <div className="home-sideNavbarTopOptionTitle">GLA University</div>
                </div>
                <div className='home-sideNavbarTopOption' >  {/* Fixed class name */}
                   <img src="https://4.bp.blogspot.com/-cKfxHZBZKNo/WIQaN1S0CwI/AAAAAAAAFAc/8CVg_TVmG6ES8uVepCpzzYmwKyxvmyR7gCLcB/s1600/kvs-logo-with-bg.png" alt="" className="home-sideNavbar-ImgLogo" />
                   <div className="home-sideNavbarTopOptionTitle">KV raebareli</div>
                
                
                </div>

                
            </div>
       </div>
   )
}

export default SideNavbar
