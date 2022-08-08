import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function Input() {

    const [todo, setTodo] = useState('');
    const [err, setErr] = useState(false);

    const dispatch = useDispatch();  

    const addTodo = (event) => {
        event.preventDefault();

        if (todo.length > 0) {
            dispatch({type: 'add', payload: todo})

            setTodo('');
        } else {
            setErr(true);
        }
    }

    return (
        <form className="row g-3" onSubmit={addTodo}>
            <div className="col-10">
                <input
                    type="text"
                    className="form-control"
                    id="todo"
                    value={todo}
                    placeholder="Enter Todo"
                    onChange={(e) => {
                        setTodo(e.target.value)
                        setErr(false);
                    }} />
                {err && <p className="text-danger">Please Enter Todo</p>}
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-primary mb-3">Add Todo</button>
            </div>
        </form>
    )
}

export default Input