export const initialState = [];

export function todoReducer(state, action) {
  switch (action.type) {
    case "Add_ToDo":
      return [
        {
          id: Date.now(),        //Unique ID for the todo
          text: action.payload,  //Text entered by the user
          completed: false,      //new todos start incomplete
          isEditing: false       //not in edit mode initially
        },
        ...state                 //keep existing todos below the new one
      ];

    case "Toggle_ToDo":             //checked/unchecked
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "Delete_ToDo":             //remove todo
      return state.filter((todo) => todo.id !== action.payload);

    case "Start_Edit":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isEditing: true }
          : todo
      );

    case "Save_Edit":            //Swtich a todo into editing mode
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              text: action.payload.text,
              isEditing: false
            }
          : todo
      );

    default:
      return state;
  }
}