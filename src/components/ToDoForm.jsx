import { useState } from "react";

function ToDoForm({ dispatch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    dispatch({
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