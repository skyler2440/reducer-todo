import React, { useReducer } from "react";
import { initialState, todoReducer } from "./reducers";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("TCL: App -> state", state)
  const addTodo = item => {
    dispatch({ type: 'ADD_TODO', payload: item})
  }
  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id})
  }
  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED'})
 
  }
  return (
    <div className="App">
      <TodoList todoArray={state.todoArray} toggleTodo={toggleTodo} />
      <TodoForm addTodo={addTodo}  clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
