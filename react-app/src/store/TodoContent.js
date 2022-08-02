import React from "react";

const TodoContext = React.createContext({
    name: "fdasfsaf"
})

export const TodoContextProvider = (props) => {

    let store = {
        name: "deepak"
    }

    return (
        <TodoContext.Provider value={store}>
            {props.children}
        </TodoContext.Provider>
    )
}


export default TodoContext;