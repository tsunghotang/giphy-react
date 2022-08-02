import React, { useState } from 'react';
// import giphy from 'giphy-api';
import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from './gif';

// Data
import defaultGifs from '../data/defaultGifs';
import defaultSelectedGif from '../data/defaultSelectedGif';

const App = () => {
  const [selectedGif, setSelectedGif] = useState(defaultSelectedGif);
  const [gifList, setGifList] = useState(defaultGifs);


  // const searchGiphy = (query) => {
  //   giphy('n7LToNAYy3EFNdNoROWRE7AHCRhqske7').search({
  //     q: query,
  //     rating: 'g',
  //     limit: 10
  //   }, (error, result) => {
  //     const gifs = result.data.map(gif => ({ id: gif.id, title: gif.title }));

  //     setGifList(gifs);
  //   });
  // };

    const searchGiphy = (query) => {
    const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${n7LToNAYy3EFNdNoROWRE7AHCRhqske7}&q=${query}&limit=10`
    fetch(giphEndpoint).then(response => response.json()).then((data) => {
      this.setState({
        gifs: data.data
      })
      console.log(this.state.gifs)
    })
  }

  return (
    <div>
      <div className="left-scene">
        <div className="searchBar">
          <SearchBar searchGiphy={searchGiphy} />
        </div>
        <div className="selected-gif">
          <Gif gifID={selectedGif.id} gifTitle={selectedGif.title} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifData={gifList} setSelectedGif={setSelectedGif} />
      </div>
    </div>
  );
};

export default App;
