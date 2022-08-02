import React from 'react';

const Gif = ({ gifID, gifTitle, setSelectedGif }) => {
  const handleClick = () => {
    if (setSelectedGif) setSelectedGif({ id: gifID, title: gifTitle });
    // conditional ensure that the main gif does not execute setSelectedGif
  };

  const src = `https://media.giphy.com/media/${gifID}/giphy.gif`;

  return (
    <img src={src} alt={gifTitle} className="gif" onClick={handleClick} />
  );
};

export default React.memo(Gif);
