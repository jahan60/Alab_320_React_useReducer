import { useState } from "react";

function ToDoItem({ todo, dispatch }) {
  const [editText, setEditText] = useState(todo.text);

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          dispatch({
            type: "Toggle_ToDo",
            payload: todo.id
          })
        }
      />

      {todo.isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />

          <button
            onClick={() =>
              dispatch({
                type: "Save_Edit",
                payload: { id: todo.id, text: editText }
              })
            }
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none"
            }}
          >
            {todo.text}
          </span>

          <button
            onClick={() =>
              dispatch({
                type: "Start_Edit",
                payload: todo.id
              })
            }
          >
            Edit
          </button>

          <button
            disabled={!todo.completed}
            onClick={() =>
              dispatch({
                type: "Delete_ToDo",
                payload: todo.id
              })
            }
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default ToDoItem;