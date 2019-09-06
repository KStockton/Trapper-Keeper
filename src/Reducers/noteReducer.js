export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "ALL_NOTES":
      return action.notes;
    case "DELETE_NOTE":
      return state.filter(note => note._id !== action.id);
    default:
      return state;
  }
};
