import ToDoItem from "./ToDoItem.jsx";

function ToDoList({ todos, dispatch }) {
  return (
    <div>
      {todos.length === 0 ? (   //If there are no todos, show a simple message
        <p>No tasks yet.</p>
      ) : (
        todos.map((todo) => (   //Otherwise, loop through all todos and render each one.
                                //Each item receives its own data plus dispatch so it can
                                // toggle, edit, save, or delete itself
          
          <ToDoItem
            key={todo.id}      //Unique key for React rendering
            todo={todo}        //The todo object itself
            dispatch={dispatch} //Pass dispatch down to child
          />
        ))
      )}
    </div>
  );
}

export default ToDoList;