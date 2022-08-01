
export const TodoReducer = (state,action) => {

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