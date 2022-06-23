import React from "react";
import Item from "./Item";

const Items = ({ todos }) => {
  return (
    <ol>
      {todos.map((todo, index) => {
        return <Item key={index} todo={todo} />;
      })}
    </ol>
  );
};

export default Items;
