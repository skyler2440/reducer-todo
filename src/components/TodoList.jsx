import React from "react";
const TodoList = ({ todoArray, toggleTodo }) => {
  return (
    <>
      {todoArray.map(res => (
        <h3 key={res.id} onClick={() => toggleTodo(res.id)}
        className={res.completed ? 'completed' : ''}>{res.item}</h3>
      ))}
    </>
  );
};

export default TodoList;
