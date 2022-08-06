import React, { Component } from 'react';
import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from './gif';
// import giphy from 'giphy-api';

const GIPHY_API_KEY = 'n7LToNAYy3EFNdNoROWRE7AHCRhqske7';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId: 'xT5LMHxhOfscxPfIfm',
      gifs: [
        { id: '4pMX5rJ4PYAEM' },
        { id: 'oFRI4g517yWaI' },
        { id: 'l0NwOkgTYRi30mT4Y' },
        { id: '8Cz5czw3zuANO' },
        { id: 'vdbrUjzrUEGly' },
        { id: 'ASd0Ukj0y3qMM' },
        { id: 'fDO2Nk0ImzvvW' },
        { id: '8fen5LSZcHQ5O' },
        { id: 'cO39srN2EUIRaVqaVq' },
        { id: 'oWjyixDbWuAk8' }
      ]
    };
  }

  selectGif = (gifId) => {
    this.setState({ selectedGifId: gifId });
  };

  search = (query) => {
    const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`;
    fetch(giphEndpoint).then((response) => response.json()).then((data) => {
      this.setState({
        gifs: data.data
      });
    });
  };

  render() {
    const { gifs, selectedGifId } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
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
