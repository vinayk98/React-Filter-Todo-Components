import React, { useState } from "react";

const Form = ({ setTodos, todos }) => {
  const [formValues, setFormValues] = useState({
    input: "",
  });
  const setInputValue = (e) => {
    const inputVal = e.target.value;
    setFormValues({ input: inputVal });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodos([...todos, formValues.input]);
          setFormValues({ input: "" });
        }}
      >
        <input
          onChange={setInputValue}
          className="inp"
          type="text"
          value={formValues.input}
          placeholder="enter todo"
        />

        <button type="submit" className="btn btn-primary">
          Add todo
        </button>
      </form>
    </div>
  );
};

export default Form;
