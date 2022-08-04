import React, { useReducer } from "react";
import { TodoReducer } from "./TodoReduce";
import TodoContext, { initialValues } from "./TodoContext";

const TodoContextProvider = (props) => {

    const [todoReduce, dispatchTodo] = useReducer(TodoReducer, initialValues)

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

export default TodoContextProvider;