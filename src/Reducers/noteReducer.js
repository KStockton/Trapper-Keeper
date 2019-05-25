export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_NOTES':
      return action.notes;
    default:
      return state;
  }
};
