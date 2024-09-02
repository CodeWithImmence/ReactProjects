import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItemOne from "./Components/TodoItemOne";
import TodoItemTwo from "./Components/TodoItemTwo";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItemOne />
        <TodoItemTwo />
      </div>
    </center>
  );
}

export default App;
