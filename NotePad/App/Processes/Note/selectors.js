export const selectNotes = (state) => state.note.notes;
export const selectNoteById = (state, id) => state.note.notes.find(note => note._id === id);
export const selectCurrentNote = (state) => state.note.note;
export const selectLoading = (state) => state.note.loading;
export const selectError = (state) => state.note.error;
