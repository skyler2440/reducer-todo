import React, { useState } from "react";
const TodoForm = ({ addTodo, clearCompleted }) => {
  const [item, setItem] = useState("");
  const handleChange = e => setItem(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(item);
    setItem("");
  };
  const handleClear = e => {
    e.preventDefault();
    clearCompleted();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item"
          value={item}
          onChange={handleChange}
          placeholder="todo"
        />
        <button type="submit">Add Todo</button>
        <button onClick={handleClear}>Clear Completed</button>
      </form>
    </>
  );
};

export default TodoForm;
