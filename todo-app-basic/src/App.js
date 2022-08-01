import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input';
import Todo from './components/Todo';

function App() {

  const [todos, setTodos] = useState([]);

  const AddTodo = (todo) => {
    setTodos([
      ...todos,
      todo
    ])
  }

  const deleteTodo = (index) => {

    const prevTodo = todos;

    prevTodo.splice(index, 1);

    setTodos([
      ...prevTodo
    ])
  }

  return (
    <div className="container">
      <Input addTodo={AddTodo} />
      <Todo todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
