export const initialState = [];

export function todoReducer(state, action) {
  switch (action.type) {
    case "Add_ToDo":
      return [
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
          isEditing: false
        },
        ...state
      ];

    case "Toggle_ToDo":
        return state.map(todo =>
            todo.id === action.payload? {...todo, completed: !todo.completed}
            : todo
        ) ;

    case "Delete_ToDo":
        return state.filter((todo)=> !todo.id == action.payload);   
    default:
      return state;
  }
}