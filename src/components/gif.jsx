import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps) {
    // default returns true.
    // if function returns false the componenet won't re-render
    const { id } = this.props;
    return id !== nextProps.id;
  }

  handleClick = () => {
    const { selectGif, id } = this.props;

    if (selectGif) {
      selectGif(id);
    }
  };

  render() {
    console.log('gif');
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;

    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
