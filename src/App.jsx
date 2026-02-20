import { useReducer } from "react";
import { todoReducer, initialState } from "./components/todoReducer";

import "./App.css";
import ToDoForm from "./components/ToDoForm.jsx";
import ToDoList from "./components/ToDoList.jsx";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="app">
      <h1>Todo List</h1>

      <ToDoForm dispatch={dispatch} />
      <ToDoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
