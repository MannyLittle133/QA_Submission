import React from 'react';
import VideoPlayer from './VideoPlayer';
import './App.css';

function App() {
  const videoUrl = 'https://www.youtube.com/watch?v=bY1kLt4iz94'; // Replace YOUR_VIDEO_ID with the ID of your video

  return (
    <div className="App">
      <h1>Why QA Wolf? 🤔</h1>
      <VideoPlayer src={videoUrl} />
    </div>
  );
}

export default App;
