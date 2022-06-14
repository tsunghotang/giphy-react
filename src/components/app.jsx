import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from './gif';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId: 'xT5LMHxhOfscxPfIfm',
      gifs: []
    };
  }

  selectGif = (gifId) => {
    this.setState({ selectedGifId: gifId });
  }

  search = (query) => {
    giphy('n7LToNAYy3EFNdNoROWRE7AHCRhqske7').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({ gifs: result.data });
    });
  }

  // search = (query) => {
  //   const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`
  //   fetch(giphEndpoint).then(response => response.json()).then((data) => {
  //     this.setState({
  //       gifs: data.data
  //     })
  //     console.log(this.state.gifs)
  //   })
  // }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}  />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
