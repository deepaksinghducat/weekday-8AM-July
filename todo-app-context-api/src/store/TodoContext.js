import React, { useEffect, useReducer, useState } from "react";

const initialValues = {
    todos: [],
    addTodo: () => { },
    deleteTodo: () => { }
}

const TodoContext = React.createContext(initialValues);

export const todoReducer = (state, action) => {

    if (action.type === "add") {

        const todos = [...state.todos,action.data];

        localStorage.setItem('todo', JSON.stringify(todos))

        return {
            ...state,
            todos: [
                ...state.todos,
                action.data
            ]
        }
    }

    if (action.type === "delete") {
        const prevTodo = state.todos;

        prevTodo.splice(action.data, 1);

        return {
            ...state,
            todos: prevTodo
        }
    }

    if(action.type === "previous") {
        return {
            ...state,
            todos: action.data
        }
    }

    return state
}

export const TodoContextProvider = (props) => {

    const [todoReduce, dispatchTodo] = useReducer(todoReducer, initialValues)

    const prevData = JSON.parse(localStorage.getItem('todo'));

    const addTodo = (todo) => {
        dispatchTodo({ type: 'add', data: todo })
    }

    const deleteTodo = (index) => {
        dispatchTodo({ type: 'delete', data: index })
    }

    return <TodoContext.Provider value={{
        ...todoReduce,
        addTodo: addTodo,
        deleteTodo: deleteTodo
    }}>
        {props.children}
    </TodoContext.Provider>
}

export default TodoContext;