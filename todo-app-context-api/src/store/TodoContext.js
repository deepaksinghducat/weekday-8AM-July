import React from "react";

export const initialValues = {
    todos: localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [],
    addTodo: () => { },
    deleteTodo: () => { }
}

const TodoContext = React.createContext(initialValues);

export default TodoContext;