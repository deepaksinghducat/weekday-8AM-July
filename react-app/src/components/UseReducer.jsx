import React from 'react'
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import {TodoReducer} from './TodoReducer';

function UseReducer() {
    
    const [todo, setTodo] = useState([]);

    const [todoReduce, dispatchTodo] = useReducer(TodoReducer, {
        todos: []
    });

    useEffect(() => {
        console.log(todoReduce);
    }, [todoReduce])

    const addTodo = (event) => {
        event.preventDefault();

        dispatchTodo({type: 'add', data: todo})
    }

    return (
        <div style={{
            textAlign: 'center',
        }}>
            <form onSubmit={addTodo}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type='submit'>Add Todo</button>
            </form>
            <ul>
                {
                    todoReduce.todos.length > 0 ? todoReduce.todos.map((todo,index) => (
                        <li key={index}>{todo}</li>
                    )) : (<li>No todo</li>)
                }
            </ul>

        </div>
    )
}

export default UseReducer