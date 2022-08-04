import React from 'react';

function Gif({ gifID, gifTitle, setSelectedGif }) {
  const handleClick = () => {
    if (setSelectedGif) setSelectedGif({ id: gifID, title: gifTitle });
    // conditional ensure that the main gif does not execute setSelectedGif
    // Execute setSelectedGif if the gif clicked on has the function setSelectedGif
  };

  const src = `https://media.giphy.com/media/${gifID}/giphy.gif`;

  return (
    <input type="image" src={src} alt={gifTitle} className="gif" onClick={handleClick} />
  );
}

export default React.memo(Gif, (prevProps, nextProps) => prevProps.gifID === nextProps.gifID);
