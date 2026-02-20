import ToDoItem from "./ToDoItem.jsx";

function ToDoList({ todos, dispatch }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
          />
        ))
      )}
    </div>
  );
}

export default ToDoList;