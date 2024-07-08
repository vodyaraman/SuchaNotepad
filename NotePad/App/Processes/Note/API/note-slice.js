import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние
const initialState = {
  noteTitle: "Заголовок заметки",
  noteText: {
    "text": ["", ]
  },
  userName: "Павел Башкирцев",
  userID: 1,
  notePriority: true,
  timestamp: { isTemporary: false, dateStart: "12.08.2024 8:00", dateEnd: "12.08.2025 21:00" },
  noteType: 2,
};

// Создание слайса
const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setNoteTitle: (state, action) => { state.noteTitle = action.payload; },
    setNoteText: (state, action) => { state.noteText = action.payload; },
    setUserName: (state, action) => { state.userName = action.payload; },
    setUserID: (state, action) => { state.userID = action.payload; },
    setNotePriority: (state, action) => { state.notePriority = action.payload; },
    setTimestamp: (state, action) => { state.timestamp = action.payload; },
    setNoteType: (state, action) => { state.noteType = action.payload; },
    updateNote: (state, action) => { return { ...state, ...action.payload }; }
  },
});

export const { setNoteTitle, setNoteText, setUserName, setUserID, setNotePriority, setTimestamp, setNoteType, updateNote } = noteSlice.actions;
export default noteSlice.reducer;

