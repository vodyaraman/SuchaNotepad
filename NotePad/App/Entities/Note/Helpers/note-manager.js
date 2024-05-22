import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../../../Processes/Note/note-slice';

// Context to manage note content
export const TextContext = createContext();

// Provider
export const NoteManagerProvider = ({ children }) => {
    const dispatch = useDispatch();

    const note = useSelector((state) => state.note);
    
    // Dispatch the updated note object to Redux
    const setNote = (updatedNote) => {
        dispatch(updateNote(updatedNote));
    };

    // Individual setters for each state property
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

    const setNoteType = (type) => {
        setNote({ ...note, noteType: type });
    };

    // Split note object into individual states
    const { noteTitle, noteText, userName, notePriority, timestamp, noteType } = note;

    return (
        <TextContext.Provider value={{
            noteTitle, setNoteTitle,
            noteText, setNoteText,
            userName, setUserName,
            notePriority, setNotePriority,
            timestamp, setTimestamp,
            noteType, setNoteType,
            setNote
        }}>
            {children}
        </TextContext.Provider>
    );
};

// Custom hook
export const useText = () => useContext(TextContext);
