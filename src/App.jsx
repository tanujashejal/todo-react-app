import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./Components/App.css";
import TodoItems from "./Components/Todoitems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to college",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />

      <AddTodo />

      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;