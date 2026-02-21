import { useReducer } from "react";
import { todoReducer, initialState } from "./components/todoReducer";
import "./App.css";
import ToDoForm from "./components/ToDoForm.jsx";
import ToDoList from "./components/ToDoList.jsx";

function App() {
  //todos= current state 
  //dispatch=function used to send actions to the reducer.
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

//<ToDoForm dispatch={dispatch} /> form component responsible for adding new todos.
//pass dispatch so the form can trigger add_todo actions. 
//<ToDoList todos={todos} dispatch={dispatch} />
//List component that displays all todos.
//We pass both the todos array and dispatch so each item
// can toggle, edit, save, or delete itself.
