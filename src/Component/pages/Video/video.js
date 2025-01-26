import React from 'react';
import './video.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Video = () => {
  const suggestions = [
    {
      id: 1,
      title: 'Big Buck Bunny',
      channel: 'Blender Foundation',
      duration: '10:34',
      thumbnail: 'https://img.youtube.com/vi/YE7VzlLtp-4/hqdefault.jpg',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      id: 2,
      title: 'Elephant Dream',
      channel: 'Blender Foundation',
      duration: '10:53',
      thumbnail: 'https://img.youtube.com/vi/eXRnrBpYE7U/hqdefault.jpg',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
    {
      id: 3,
      title: 'Sintel',
      channel: 'Blender Foundation',
      duration: '14:48',
      thumbnail: 'https://img.youtube.com/vi/eD40sE5K8_s/hqdefault.jpg',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    },
    {
      id: 4,
      title: 'Tears of Steel',
      channel: 'Blender Foundation',
      duration: '12:15',
      thumbnail: 'https://img.youtube.com/vi/Ouo-Usijr-8/hqdefault.jpg',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    },
    {
      id: 5,
      title: 'For Bigger Fun',
      channel: 'Sample Videos',
      duration: '00:32',
      thumbnail: 'https://img.youtube.com/vi/Jy9oJZ0qnJk/hqdefault.jpg',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    },
  ];

  return (
    <div className='video'>
      {/* Main Video Section */}
      <div className="videoPostSection">
        <div className="video-youtube">
          <video width="400" controls autoPlay className='video-youtube-video'>
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-youtubeAbout">
          <div className="video-utubeTitle">{"Big Buck Bunny"}</div>

          <div className="youtube-video-ProfileBlock">
            <div className="youtube-video-ProfileBlock-left">
              <div className="youtube-video-ProfileBlock-left-img">
                <img
                  src="https://th.bing.com/th?id=OIP.SYM_cL9z0I57d6axMOyXxwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                  alt="Profile"
                  className='youtube-video-ProfileBlock-left-image'
                />
              </div>
              <div className="youtubeVideo_subView">
                <div className="youtubePostProfileName">{"Blender Foundation"}</div>
                <div className="youtubePostProfilesubs">{"Published: 2024"}</div>
              </div>
              <div className="subscribeBtnYoutube">Subscribe</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Suggestions */}
      <div className="videoSuggestions">
        {suggestions.map((video) => (
          <div key={video.id} className="videoSuggestionItem">
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="videoSuggestionLink">
              <div className="videoSuggestionThumbnailWrapper">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="videoSuggestionItem-thumbnail"
                  onError={(e) =>
                    (e.target.src = 'https://via.placeholder.com/120x70.png?text=No+Image')
                  }
                />
                <div className="videoDuration">{video.duration}</div>
              </div>
              <div className="videoSuggestionItem-details">
                <div className="videoSuggestionItem-title">{video.title}</div>
                <div className="videoSuggestionItem-channel">{video.channel}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
