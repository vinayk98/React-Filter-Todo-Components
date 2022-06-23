import React from "react";
import Item from "./Item";

const Items = ({ todos, searchValue }) => {
  return (
    <ol>
      {todos
        .filter((item) => {
          return item.includes(searchValue);
        })
        .map((todo, index) => {
          return <Item key={index} todo={todo} />;
        })}
    </ol>
  );
};

export default Items;
