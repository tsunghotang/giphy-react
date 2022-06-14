import React, { Component } from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends Component {
  debounce = debounce(event => this.props.searchFunction(event.target.value), 1000);

  handleUpdate = (event) => {
    this.debounce(event);
  }

  render() {
    return (
      <input type="input" className="form-search form-control" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
