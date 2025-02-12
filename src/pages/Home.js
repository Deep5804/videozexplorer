// src/pages/Home.js
import React, { useState } from "react";
import VideoList from "../components/VideoList";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("cats");

  return (
    <div className="p-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 w-full mb-4"
        placeholder="Search for videos..."
      />
      <VideoList searchQuery={searchQuery} />
    </div>
  );
};

export default Home;