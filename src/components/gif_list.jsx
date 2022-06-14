import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="gif-list">
  //       {this.props.gifs.map(gif => {
  //         return <Gif id={gif.id} />
  //       })}
  //     </div>
  //   );

  // }
}

export default GifList;
