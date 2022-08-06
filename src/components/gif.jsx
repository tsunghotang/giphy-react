import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps) {
    // default returns true.
    // if function returns false the componenet won't re-render
    const { gifID } = this.props;
    return gifID !== nextProps.gifID;
  }

  handleClick = () => {
    const { selectGif, gifID, gifTitle } = this.props;
    if (selectGif) {
      selectGif({ id: gifID, title: gifTitle });
    }
  };

  render() {
    const { gifTitle, gifID } = this.props;
    const src = `https://media.giphy.com/media/${gifID}/giphy.gif`;

    return (
      <input type="image" src={src} alt={gifTitle} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
