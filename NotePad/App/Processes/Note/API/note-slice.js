import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
  noteTitle: "",
  noteText: { text: [""] },
  userName: "",
  userID: 1,
  notePriority: true,
  timestamp: { isTemporary: false, dateStart: "12.08.2024 8:00", dateEnd: "12.08.2025 21:00" },
  noteType: 2,
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
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
    setNoteTitle: (state, action) => { state.noteTitle = action.payload; },
    setNoteText: (state, action) => { state.noteText = { text: [action.payload] }; },
    setUserName: (state, action) => { state.userName = action.payload; },
    setUserID: (state, action) => { state.userID = action.payload; },
    setNotePriority: (state, action) => { state.notePriority = action.payload; },
    setTimestamp: (state, action) => { state.timestamp = action.payload; },
    setNoteType: (state, action) => { state.noteType = action.payload; },
  },
});

export const {
  setNotes,
  addNote,
  updateNote,
  deleteNote,
  setNoteTitle,
  setNoteText,
  setUserName,
  setUserID,
  setNotePriority,
  setTimestamp,
  setNoteType
} = noteSlice.actions;

export default noteSlice.reducer;