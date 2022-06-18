import React from 'react';

const Gif = ({ gifID, setSelectedGif }) => {
  const handleClick = () => {
    if (setSelectedGif) setSelectedGif(gifID);
  };

  const src = `https://media.giphy.com/media/${gifID}/giphy.gif`;

  return (
    <img src={src} alt="" className="gif" onClick={handleClick} />
  );
};

export default React.memo(Gif);
