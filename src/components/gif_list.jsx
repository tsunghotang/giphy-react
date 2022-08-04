import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  shouldComponentUpdate(nextProps) {
    const { gifs } = this.props;
    if (nextProps.gifs.length === 0) return true;
    return !nextProps.gifs.every((gif) => gifs.includes(gif));
    // gif represnets an array of gifs
    // for every gif in the next element check if they are the same as the gif in the old array
    // if all true we want to return false so the componenet does not re-render
  }

  renderList = () => {
    const { gifs, selectGif } = this.props;
    return gifs.map((gif) => <Gif id={gif.id} key={gif.id} selectGif={selectGif} />);
  };

  render() {
    console.log('gif list');

    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
