import React, { useCallback } from 'react';
import debounce from 'lodash.debounce';

const SearchBar = ({ searchGiphy }) => {
  const debounceSearch = useCallback(debounce(query => searchGiphy(query), 1000), []);

  const handleUpdate = (event) => {
    debounceSearch(event.target.value);
  };

  return (
    <input type="input" className="form-search form-control" onChange={handleUpdate} placeholder="Search for a Gif" />
  );
};

export default SearchBar;
