import ClassTodoList from "./components/ClassTodoList";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container mt-4">
      <Input />
      <ClassTodoList />
    </div>
  );
}

export default App;
