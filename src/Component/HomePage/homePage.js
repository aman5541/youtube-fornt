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
                    <img src="https://designshack.net/wp-content/uploads/Youlit-Bold-YouTube-Title-Font.jpg"
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
              src="https://designshack.net/wp-content/uploads/Youlit-Bold-YouTube-Title-Font.jpg"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              18:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="http://ts1.mm.bing.net/th?id=OIP.2yHsYKpLk2EzmhdN_GAEzwHaEv&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">gtv</div>
                     <div className="youtube-channelName">ayush</div>
                     <div className="youtube-views"> 130 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
          <div className="youtube-thumbnailBox">
            <img
              src="https://th.bing.com/th/id/OIP.fOLA-83f8DLpzhQJeZeMqgHaEK?rs=1&pid=ImgDetMain"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              28:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="https://th.bing.com/th/id/OIP.fOLA-83f8DLpzhQJeZeMqgHaEK?rs=1&pid=ImgDetMain"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">Learn </div>
                     <div className="youtube-channelName">User4</div>
                     <div className="youtube-views"> 670 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
          <div className="youtube-thumbnailBox">
            <img
              src="https://th.bing.com/th/id/OIP.dQsCwkA8oGRKpUUywRUJ6AHaEK?w=289&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              25:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="https://th.bing.com/th/id/OIP.dQsCwkA8oGRKpUUywRUJ6AHaEK?w=289&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">Gaming</div>
                     <div className="youtube-channelName">Techno</div>
                     <div className="youtube-views"> 1130 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
          <div className="youtube-thumbnailBox">
            <img
              src="https://i.ytimg.com/vi/29Z8Jy28kLw/maxresdefault.jpg"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              35:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="https://i.ytimg.com/vi/29Z8Jy28kLw/maxresdefault.jpg"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">Basic to Top</div>
                     <div className="youtube-channelName">Guru</div>
                     <div className="youtube-views"> 899 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
          <div className="youtube-thumbnailBox">
            <img
              src="http://ts4.mm.bing.net/th?id=OIP.TcVLBkYGTO7F-M2i2N31EgHaEK&pid=15.1"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              8:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="http://ts4.mm.bing.net/th?id=OIP.TcVLBkYGTO7F-M2i2N31EgHaEK&pid=15.1"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">Tahlka</div>
                     <div className="youtube-channelName">Gupta ji</div>
                     <div className="youtube-views"> 675 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
          <div className="youtube-thumbnailBox">
            <img
              src="https://th.bing.com/th?q=Thumbnail+Material&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              10:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="https://th.bing.com/th?q=Thumbnail+Material&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">Thumbnail+Material</div>
                     <div className="youtube-channelName">Thumbnail+Material</div>
                     <div className="youtube-views"> 2230 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
          <div className="youtube-thumbnailBox">
            <img
              src="https://th.bing.com/th/id/OIP.Lgpxj439XB9kMg3FRWL8cgHaEL?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              28:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="https://th.bing.com/th/id/OIP.Lgpxj439XB9kMg3FRWL8cgHaEL?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">Anim</div>
                     <div className="youtube-channelName">chinki</div>
                     <div className="youtube-views"> 110 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
          <div className="youtube-thumbnailBox">
            <img
              src="https://th.bing.com/th/id/OIP.r4JRGZtIwUcEZLcmPtMV-QHaEK?rs=1&pid=ImgDetMain"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              28:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="https://th.bing.com/th/id/OIP.r4JRGZtIwUcEZLcmPtMV-QHaEK?rs=1&pid=ImgDetMain"
                    alt="Profile" className="youtube-thumbnailProfile" />
                   </div>

                   <div className="youtubeTitleBox_Title">
                     <div className="youtube-videoTitle">Season 7</div>
                     <div className="youtube-channelName">chimp</div>
                     <div className="youtube-views">454 Likes</div>
                     
                   </div>
              </div>


        </div>
        <div className="youtube-Video">
          <div className="youtube-thumbnailBox">
            <img
              src="https://th.bing.com/th/id/OIP.enwqkRLZhZzVi8TRaxf4JQHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              28:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="https://th.bing.com/th/id/OIP.enwqkRLZhZzVi8TRaxf4JQHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
              src="https://th.bing.com/th/id/OIP.enwqkRLZhZzVi8TRaxf4JQHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Thumbnail"
              className="youtube-thumbnailPic"
            />
            <div className="youtube-timingThumbnail">
              28:05
            </div>
          </div>

              <div className="youtubeTitleBox">
                   <div className="youtubeTitleBoxProfile"> 
                    <img src="https://th.bing.com/th/id/OIP.enwqkRLZhZzVi8TRaxf4JQHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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

