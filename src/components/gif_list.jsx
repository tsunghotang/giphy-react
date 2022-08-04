import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  shouldComponentUpdate(nextProps) {
    const { gifs } = this.props;
    if (nextProps.gifs.length === 0) return true;
    return !nextProps.gifs.every((element) => gifs.includes(element));
    // rewatch vid and understand this
    // for every gif in the next element check if they are the same
  }

  renderList = () => {
    const { gifs, selectGif } = this.props;
    return gifs.map((gif) => <Gif id={gif.id} key={gif.id} selectGif={selectGif} />);
  };

  render() {
    console.log('gif list')

    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
