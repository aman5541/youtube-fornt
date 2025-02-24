import React from 'react';
import './homePage.css';
import {Link} from 'react-router-dom';

const HomePage = ({ sideNavbar }) => {
  const options = [
    "All",
    "Twenty20 Cricket",
    "Music",
    "Live",
    "GLA University",
    "Coding Blocks",
    "Gaming",
    "Debates",
    "Democracy",
    "Comedy",
    "Kapil's Show",
    "Music",
    "Live",
    "GLA University",
    "Coding Blocks",
    "Gaming",
    "Debates",
    "Pakistani Dramas",
  ];

  return (
    <div className={sideNavbar ? 'homePage' : 'fullHomePage'}>
      <div className="homePage-options">
        {options.map((item, index) => (
          <div key={index} className="homePage-option">
            {item}
          </div>
        ))}
      </div>
      <div className={sideNavbar ? 'home-mainPage' : 'fullHomePage-withoutLink'}>
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
  );
};

export default HomePage;

