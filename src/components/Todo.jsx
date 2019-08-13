import React, {useState, useReducer} from 'react'
import {initialState, todoReducer, newState} from '../reducers/todoReducer'

const Todo = (props) => {
    console.log("TCL: props", props)
    const [newTodo, setNewTodo] = useState({
        item:'',
        completed:false,
        id:''
    });

const [state, dispatch] = useReducer(todoReducer, initialState);
console.log("TCL: Todo -> state", state)

const handleChanges = e => {
    setNewTodo(e.target.value)
}

return(
    <>
    <h1>Todo List</h1>
    <div>
    
    </div>
    <div>
        <input
        type='text'
        name='item'
        value={newTodo}
        onChange={handleChanges} />
        <button onClick={() =>
        dispatch({ type: 'ADD_TODO', payload: newTodo})}
        >
            Add Todo</button>
    </div>
    </>
)
}



export default Todo;