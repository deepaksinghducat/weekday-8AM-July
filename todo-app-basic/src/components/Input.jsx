import React, { useState } from 'react'

function Input(props) {

    const [todo,setTodo] = useState('');
    const [err,setErr] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        
        if(todo.length > 0) {
            props.addTodo(todo);
            setTodo('');
        }else{
            setErr('Please enter some work');
        }
    }

    return (
        <form className="row mt-4" onSubmit={submitHandler}>
            <div className="col-auto">
                <input type="text" className="form-control" id="todo" value={todo} onChange={(e) => {setTodo(e.target.value); setErr('')}} />
                {
                    err.length > 0 && (<p className='text-danger'>{err}</p>)
                }
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Submit Todo</button>
            </div>
        </form>
    )
}

export default Input