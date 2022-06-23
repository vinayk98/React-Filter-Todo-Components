import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import Items from "./components/Items";
import SearchBar from "./components/SearchBar";

import "./index.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filteringFlag, setFilteringFlag] = useState(false);
  return (
    <div className="container-fluid">
      <SearchBar
        todos={todos}
        setFilteredTodos={setFilteredTodos}
        setFilteringFlag={setFilteringFlag}
      />
      <div className="container">
        <h6 className="Heading">filter-todo-with-components</h6>
        <Form todos={todos} setTodos={setTodos} />
        <Items todos={filteringFlag ? filteredTodos : todos} />
        {/* {filteringFlag ? (
          <Items todos={filteredTodos} />
        ) : (
          <Items todos={todos} />
        )} */}
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
