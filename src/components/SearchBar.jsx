import React, { useState } from "react";

const SearchBar = ({ setSearchValue }) => {
  const setFilteredTodosList = (e) => {
    const inp = e.target.value;
    setSearchValue(inp);
  };
  return (
    <div>
      <input
        className="SearchBar"
        type="text"
        placeholder="Search todo"
        onChange={setFilteredTodosList}
      />
    </div>
  );
};

export default SearchBar;
