import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoId }) => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `https://express-api-vjmn.onrender.com/api/video/id?id=${videoId}`
        );
        const data = await response.json();

        if (data.success && data.video && data.video.video_url) {
          setVideoUrl(data.video.video_url);
        } else {
          throw new Error("Invalid video data received");
        }
      } catch (err) {
        setError("Failed to load video");
        console.error("Error fetching video:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [videoId]);

  if (loading) return <p>Loading video...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ReactPlayer
        url={videoUrl}
        playing={false}
        controls
        width="100%"
        height="400px"
        onError={(e) => console.error("Video Load Error:", e)}
      />
    </div>
  );
};

export default VideoPlayer;
