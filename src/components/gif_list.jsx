import React from 'react';
import Gif from './gif';

const GifList = ({ gifIDs, setSelectedGif }) => {
  const renderList = () => {
    return gifIDs.map(gif => <Gif gifID={gif.id} key={gif.id} setSelectedGif={setSelectedGif} />);
  };

  return (
    <div className="gif-list">
      {renderList()}
    </div>
  );
};

export default React.memo(GifList);
