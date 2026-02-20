function ToDoItem({ todo, dispatch }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
      />

      <span>{todo.text}</span>

      <button>Edit</button>
      <button disabled>Delete</button>
    </div>
  );
}

export default ToDoItem;