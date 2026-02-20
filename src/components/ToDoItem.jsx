function ToDoItem({ todo, dispatch }) {
  return (
    <div>
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

      <span>{todo.text}</span>

      <button>Edit</button>
      <button disabled={!todo.completed}
      onClick={()=>
        dispatch({
            type:"Delete_ToDo",
            payload:todo.id
        })
      }
      >
        Delete</button>
    </div>
  );
}

export default ToDoItem;