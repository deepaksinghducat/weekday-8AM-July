
export const TodoReducer = (state,action) => {

    console.log(action);
    if(action.type === 'add') {
        return {
            todos : [
                ...state.todos,
                action.data
            ]
        }
    }

    return state
}