// // src/components/VideoList.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import VideoItem from "./VideoItem";
// import Pagination from "./Pagination";

// const VideoList = ({ searchQuery }) => {
//   const [videos, setVideos] = useState([]);
//   const [page, setPage] = useState(1);
//   const perPage = 10;

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(
//           `https://express-api-vjmn.onrender.com/api/videos/?search=${searchQuery}&page=${page}&per_page=${perPage}`
//         );
//         console.log("API Response:", response.data); // Check API response
//         setVideos(response.data.videos);
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };
//     fetchVideos();
//   }, [searchQuery, page]);
  

//   return (
//     <div>
//       <div className="grid grid-cols-3 gap-4">
//         {videos.map((video) => (
//           <VideoItem key={video.id} video={video} />
//         ))}
//       </div>
//       <Pagination page={page} setPage={setPage} />
//     </div>
//   );
// };

// export default VideoList;




// src/components/VideoList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoItem from "./VideoItem";
import Pagination from "./Pagination";
import "../App.css"; // Import the CSS

const VideoList = ({ searchQuery }) => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPlayingId, setCurrentPlayingId] = useState(null);
  const perPage = 10;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://express-api-vjmn.onrender.com/api/videos/?search=${searchQuery}&page=${page}&per_page=${perPage}`
        );
        setVideos(response.data.videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, [searchQuery, page]);

  return (
    <div>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoItem
            key={video.id}
            video={video}
            isPlaying={currentPlayingId === video.id}
            setCurrentPlayingId={setCurrentPlayingId}
          />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default VideoList;
