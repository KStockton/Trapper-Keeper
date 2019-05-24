export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_NOTES':
      return [...state, action.notes];
    default:
      return state;
  }
};
