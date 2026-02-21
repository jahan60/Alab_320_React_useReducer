import { useState } from "react";

function ToDoForm({ dispatch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {  //Handle form submission when user clicks "add" button
    e.preventDefault();

    if (input.trim() === "") return; //prevent adding empty

    dispatch({                     //Send an action to the reducer to cretae a new todo
      type: "Add_ToDo",
      payload: input
    });

    setInput(""); // clear field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ToDoForm;

// Form wrapper so both the Add button AND the Enter key submit the todo.
// Using onSubmit keeps the logic in one place and makes the form behave naturally.
//<form onSubmit={handleSubmit}></form>