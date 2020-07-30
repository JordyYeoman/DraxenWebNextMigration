import React, { useState } from 'react';

const SearchBar = props => {
  //
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onFormSubmit(searchTerm);
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <form onSubmit={handleSubmit} onChange={handleChange} className="w-full">
        <input
          placeholder="Search Youtube"
          className="w-full p-4 focus:outline-none focus:shadow-outline"
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
