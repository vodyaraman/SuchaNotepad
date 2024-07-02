import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../../../Processes/Note';

// Context to manage note content
export const TextContext = createContext();

// Provider
export const NoteManagerProvider = ({ children }) => {
    const dispatch = useDispatch();
    const note = useSelector((state) => state.note);

    const setNote = (updatedNote) => {
        dispatch(updateNote(updatedNote));
    };

    const setNoteTitle = (title) => {
        setNote({ ...note, noteTitle: title });
    };

    const setNoteText = (text) => {
        setNote({ ...note, noteText: text });
    };

    const setUserName = (name) => {
        setNote({ ...note, userName: name });
    };

    const setNotePriority = (priority) => {
        setNote({ ...note, notePriority: priority });
    };

    const setTimestamp = (timestamp) => {
        setNote({ ...note, timestamp });
    };

    const { noteTitle, noteText, userName, notePriority, timestamp } = note;

    return (
        <TextContext.Provider value={{
            noteTitle, setNoteTitle,
            noteText, setNoteText,
            userName, setUserName,
            notePriority, setNotePriority,
            timestamp, setTimestamp,
            setNote
        }}>
            {children}
        </TextContext.Provider>
    );
};

// Custom hook
export const useText = () => useContext(TextContext);

