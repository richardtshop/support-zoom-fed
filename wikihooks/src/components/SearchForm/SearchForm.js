import React, { useState, useRef } from 'react';
import Error from '../Error';

const SearchForm = ({ updateFetchUrl }) => {
  const [searchInput, setSearchInput] = useState('');
  const [previousSearch, updatePreviousSearch] = useState();
  const [formError, updateFormError] = useState();
  const inputEl = useRef(null);

  const handleChange = (evt) => {
    setSearchInput(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (searchInput !== previousSearch) {
      updatePreviousSearch(searchInput);
      if (searchInput.length > 0) {
        updateFormError();
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchInput}&utf8=&format=json&origin=*`;
        // const testURL = 'https://httpstat.us/500';
        updateFetchUrl(url);
      } else {
        updateFormError('Search cannot be blank');
      }
    }
    inputEl.current.focus();
  };

  return (
    <div className="search-form--wrapper">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          ref={inputEl}
          type="text"
          name="search"
          placeholder="Search wikipedia"
          value={searchInput}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      <Error error={formError} />
    </div>
  );
};

export default SearchForm;
