import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние
const initialState = {
  notes: [],
  note: {
    title: "",
    noteText: { text: [""] },
    ownerId: {
      name: ""
    },
    notePriority: true,
    timestamp: { isTemporary: false, dateStart: "", dateEnd: "" },
    noteType: 2,
  },
  loading: false,
  error: null,
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setLoading: (state, action) => { state.loading = action.payload; },
    setError: (state, action) => { state.error = action.payload; },
    setNotes: (state, action) => { state.notes = action.payload; },
    addNote: (state, action) => { state.notes.push(action.payload); },
    updateNote: (state, action) => {
      const index = state.notes.findIndex(note => note._id === action.payload._id);
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(note => note._id !== action.payload);
    },
    setNote: (state, action) => { state.note = action.payload; },
    setNoteById: (state, action) => {
      const note = state.notes.find(note => note._id === action.payload);
      if (note) {
        state.note = { ...note, noteText: state.note.noteText };
      } else {
        state.error = 'Note not found';
      }
    },
  },
});

export const {
  setLoading,
  setError,
  setNotes,
  addNote,
  updateNote,
  deleteNote,
  setNote,
  setNoteById
} = noteSlice.actions;

export default noteSlice.reducer;
