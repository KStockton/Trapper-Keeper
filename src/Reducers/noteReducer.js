export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      const notes = [...state, action.payload.note];
      return notes;
    default:
      return state;
  }
};
