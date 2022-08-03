import React from 'react'
import { useContext } from 'react'
import TodoContext from '../store/TodoContext'

function TodoList() {

  const todo = useContext(TodoContext);

  return (
    <ul className="list-group" >
      {
        todo.todos.length > 0 ? todo.todos.map((t, index) =>
        (
          <li className="list-group-item" key={index}>{t}
            <i className="fa fa-times" aria-hidden="true" style={{ float: "right" }} onClick={() => todo.deleteTodo(index)}></i>
          </li>
        )
        ) : (<li className="list-group-item">No Todo Avaliable</li>)
      }
    </ul>
  )
}

export default TodoList