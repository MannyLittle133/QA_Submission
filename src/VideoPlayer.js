import React from 'react';

function VideoPlayer({ src }) {
  const embedUrl = src.replace("watch?v=", "embed/");
  return (
    <div className="video-player" style={{ maxWidth: '800px', margin: 'auto' }}>
      <iframe
        width="100%"
        height="450"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
