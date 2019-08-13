export const initialState ={
   todoItems:[]
};

export const todoReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TODO':
        
        const newTodo = {
            ...state,
            item: action.payload,
            id: Date.now(),
            completed:false
        }
        return {...state, todoItems:[...state.todoItems, newTodo]}
        // console.log("TCL: todoReducer -> newTask", newTask)
        default:
            return state;
    }
}