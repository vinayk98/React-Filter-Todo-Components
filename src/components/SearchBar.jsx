import React, { useState } from "react";

const SearchBar = ({ todos, setFilteredTodos, setFilteringFlag }) => {
  const setFilteredTodosList = (e) => {
    const inp = e.target.value;
    const filteredTodos = todos.filter((item) => {
      return item.includes(inp);
    });
    if (inp === "") {
      setFilteringFlag(false);
    } else {
      setFilteringFlag(true);
    }
    setFilteredTodos(filteredTodos);
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
