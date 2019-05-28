export const allNotes = notes => ({
  type: "ALL_NOTES",
  notes
});

export const deleteNote = id => ({
  type: "DELETE_NOTE",
  id
})
