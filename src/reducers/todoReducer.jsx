export let initialState =
{}
;

export const todoReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TODO':
        return{
            ...state,
            item: action.payload,
            id: Date.now(),
            completed:false
        }
        default:
            return state;
    }
}
export const newState = (state)  => {
 const newstates =  {...state};
 console.log("TCL: newState -> newstates", newstates)
}