import React from 'react';
import './homePage.css';

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
        <div className="youtube-Video">
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
                    <img src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
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
                    <img src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
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
                    <img src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
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
                    <img src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
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
                    <img src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
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
                    <img src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
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
                    <img src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
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
                    <img src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
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
                    <img src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
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
                    <img src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
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
                    <img src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
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
                    <img src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
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
                    <img src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">User1</div>
                     <div className="youtube-channelName">User1</div>
                     <div className="youtube-views"> 30 Likes</div>
                     
                   </div>
              </div>


        </div>
      </div>

    </div>
  );
};

export default HomePage;
