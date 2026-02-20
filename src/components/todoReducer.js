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
    default:
      return state;
  }
}