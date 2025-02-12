// // src/components/VideoItem.js
// import React, { useState } from "react";
// import VideoPlayer from "./VideoPlayer";

// const VideoItem = ({ video }) => {
//   const [playing, setPlaying] = useState(false);

//   const togglePlay = () => {
//     setPlaying(!playing);
//   };

//   return (
//     <div className="border p-2 rounded-lg cursor-pointer" onClick={togglePlay}>
//       <img
//   src={video.thumbnail || "https://via.placeholder.com/150"} // Placeholder for missing images
//   alt={video.title}
//   className="w-full h-48 object-cover"
// />

//       <h3 className="text-lg font-bold">{video.title}</h3>
//       {playing && <VideoPlayer videoId={video.id} />}
//     </div>
//   );
// };

// export default VideoItem;

// import React, { useState } from "react";
// import ReactPlayer from "react-player";

// const VideoItem = ({ video }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md">
//       {/* Video Player */}
//       <ReactPlayer 
//         url={video.video_url} 
//         playing={isPlaying} 
//         controls 
//         width="100%" 
//         height="250px" 
//       />

//       {/* Play/Pause Button */}
//       <button 
//         onClick={togglePlay} 
//         className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
//       >
//         {isPlaying ? "Pause" : "Play"}
//       </button>

//       {/* Video Title */}
//       <h3 className="mt-2 text-lg font-semibold text-gray-800">{video.title}</h3>
//     </div>
//   );
// };

// export default VideoItem;




// src/components/VideoItem.js
// import React from "react";
// import ReactPlayer from "react-player";

// const VideoItem = ({ video, isPlaying, setCurrentPlayingId }) => {
//   const handlePlayPause = () => {
//     setCurrentPlayingId(isPlaying ? null : video.id);
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md">
//       {/* Video Player */}
//       <ReactPlayer 
//         url={video.video_url} 
//         playing={isPlaying} 
//         controls 
//         width="100%" 
//         height="250px" 
//       />

//       {/* Play/Pause Button */}
//       <button 
//         onClick={handlePlayPause} 
//         className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
//       >
//         {isPlaying ? "Pause" : "Play"}
//       </button>

//       {/* Video Title */}
//       <h3 className="mt-2 text-lg font-semibold text-gray-800">{video.title}</h3>
//     </div>
//   );
// };

// export default VideoItem;




// import React from "react";
// import ReactPlayer from "react-player";

// const VideoItem = ({ video, isPlaying, setCurrentPlayingId }) => {
//   const handlePlayPause = () => {
//     setCurrentPlayingId(isPlaying ? null : video.id);
//   };

//   return (
//     <div className="video-item">
//       {/* Video Player */}
//       <ReactPlayer
//         url={video.video_url}
//         playing={isPlaying}
//         controls
//         width="100%"
//         height="200px"
//         className="video-player"
//       />

//       {/* Play/Pause Button */}
//       <button onClick={handlePlayPause} className="play-button">
//         {isPlaying ? "Pause" : "Play"}
//       </button>

//       {/* Video Title */}
//       <h3 className="video-title">{video.title}</h3>
//     </div>
//   );
// };

// export default VideoItem;


import React from "react";
import ReactPlayer from "react-player";

// Placeholder thumbnail image
const placeholderThumbnail = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8";

const VideoItem = ({ video, isPlaying, setCurrentPlayingId }) => {
  const handlePlayPause = () => {
    setCurrentPlayingId(isPlaying ? null : video.id);
  };

  return (
    <div className="video-item">
      {/* Show placeholder image when video is not playing */}
      {!isPlaying ? (
        <img
          src={placeholderThumbnail}
          alt="Thumbnail"
          className="video-thumbnail"
        />
      ) : (
        <div className="video-wrapper">
          <ReactPlayer
            url={video.video_url}
            playing={isPlaying}
            controls
            width="100%"
            height="100%"
            className="video-player"
          />
        </div>
      )}

      {/* Play/Pause Button */}
      <button onClick={handlePlayPause} className="play-button">
        {isPlaying ? "Pause" : "Play"}
      </button>

      {/* Video Title */}
      <h3 className="video-title">{video.title}</h3>
    </div>
  );
};

export default VideoItem;


