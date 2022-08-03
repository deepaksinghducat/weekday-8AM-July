import React, { useContext, useState } from 'react'
import TodoContext from '../store/TodoContext';

function Input() {

  const [todo,setTodo]  = useState('');
  const [err,setErr]  = useState(false);

  const store = useContext(TodoContext);

  const addTodo = (event) => {
    event.preventDefault();

    if(todo.length > 0) {
      store.addTodo(todo);

      setTodo('');
    }else{
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
          onChange={(e) =>{ 
            setTodo(e.target.value)
            setErr(false);
          }} />
        { err && <p className="text-danger">Please Enter Todo</p>}
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary mb-3">Add Todo</button>
      </div>
    </form>
  )
}

export default Input