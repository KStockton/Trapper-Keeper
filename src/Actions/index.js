export const allNotes = notes => ({
  type: "ALL_NOTES",
  notes
});

export const deleteNote = id => ({
  type: "DELETE_NOTE",
  id
});

export const handleError = errorMessage => ({
  type: "HANDLE_ERROR",
  errorMessage
});
