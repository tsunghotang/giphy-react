import React from 'react';
import Gif from './gif';

function GifList({ gifData, setSelectedGif }) {
  const renderList = () => {
    return gifData.map((gif) => (
      <Gif
        gifID={gif.id}
        gifTitle={gif.title}
        key={gif.id}
        setSelectedGif={setSelectedGif}
      />
    ));
  };

  return (
    <div className="gif-list">
      {renderList()}
    </div>
  );
}

export default React.memo(GifList);
