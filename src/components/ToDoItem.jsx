import { useState } from "react";

function ToDoItem({ todo, dispatch }) {
  const [editText, setEditText] = useState(todo.text);

  return (
    //Checkbox toggles the completed state of the todo
    <div className="todo-item">    
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          dispatch({
            type: "Toggle_ToDo",
            payload: todo.id,
          })
        }
      />

      {todo.isEditing ? ( //If the todo is in edit mode, show input + Save button.
        //Otherwise show the text + Edit/Delete buttons.
        <>
          <input
            type="text"  //Controlled input for editing the todo text
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
           
          <button
            onClick={() =>
              dispatch({
                type: "Save_Edit",  //Save the updated text and exit edit mode
                payload: { id: todo.id, text: editText },
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
              //Display todo text, with line-through if completed
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          <button
            onClick={() =>      //Switch the item into edit mode
              dispatch({
                type: "Start_Edit",
                payload: todo.id,
              })
            }
          >
            Edit
          </button>

          <button
            disabled={!todo.completed}  //Delete only allowed when the todo is completed
            onClick={() =>
              dispatch({
                type: "Delete_ToDo",
                payload: todo.id,
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
