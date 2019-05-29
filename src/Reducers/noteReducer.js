export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "ALL_NOTES":
      return action.notes;
    case "DELETE_NOTE":
      return state.filter(note => note.id !== action.id);
    default:
      return state;
  }
};
