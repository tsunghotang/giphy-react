import React, { Component } from 'react';
import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from './gif';
// import giphy from 'giphy-api';

// Data
import defaultGifs from '../data/defaultGifs';
import defaultSelectedGif from '../data/defaultSelectedGif';

const GIPHY_API_KEY = '';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGif: defaultSelectedGif,
      gifs: defaultGifs
    };
  }

  selectGif = (selectedGif) => {
    this.setState({ selectedGif: { id: selectedGif.id, title: selectedGif.title } });
  };

  search = (query) => {
    const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=50`;
    fetch(giphEndpoint).then((response) => response.json()).then((data) => {
      this.setState({
        gifs: data.data
      });
    });
  };

  render() {
    const { gifs, selectedGif } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif gifID={selectedGif.id} gifTitle={selectedGif.title} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
