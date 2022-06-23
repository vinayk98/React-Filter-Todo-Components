import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import Items from "./components/Items";
import SearchBar from "./components/SearchBar";

import "./index.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="container-fluid">
      <SearchBar setSearchValue={setSearchValue} />
      <div className="container">
        <h6 className="Heading">filter-todo-with-components</h6>
        <Form todos={todos} setTodos={setTodos} />
        <Items todos={todos} searchValue={searchValue} />
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
