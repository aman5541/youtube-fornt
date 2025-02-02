import React from "react";
import "./video.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const Video = () => {
  return (
    <div className="youtube-clone">
      {/* Main Content */}
      <div className="main-content">
        {/* Video Section */}
        <div className="video-section">
          <video controls className="video-player">
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Video Details */}
          <h2 className="video-title">Java for Beginners</h2>

          {/* Channel Info */}
          <div className="channel-info">
            <div className="profile">
              <img
                src="https://th.bing.com/th?id=OIP.SYM_cL9z0I57d6axMOyXxwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="Profile"
                className="profile-img"
              />
              <div>
                <p className="channel-name">Aman</p>
                <p className="publish-date">18-10-2004</p>
              </div>
            </div>

            <button className="subscribe-btn">Subscribe</button>
          </div>

          {/* Like & Dislike */}
          <div className="video-actions">
            <div className="like-dislike">
              <ThumbUpIcon />
              <span>32</span>
              <ThumbDownAltIcon />
            </div>
          </div>
        </div>

        {/* Recommended Videos */}
        <div className="recommendations">
          {Array(5)
            .fill()
            .map((_, index) => (
              <div key={index} className="video-card">
                <img
                  src="https://i.ytimg.com/vi/NpEaa2P7qZI/maxresdefault.jpg"
                  alt="Thumbnail"
                  className="thumbnail"
                />
                <div className="video-info">
                  <p className="video-title-small">
                    T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
                  </p>
                  <p className="video-channel">Cricket 320</p>
                  <p className="video-stats">136K views • 1 day ago</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
