import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../../../Processes/Note';

// Context to manage note type
export const TypeContext = createContext();

// Provider
export const NoteTypeProvider = ({ children }) => {
    const dispatch = useDispatch();
    const note = useSelector((state) => state.note);

    const setNote = (updatedNote) => {
        dispatch(updateNote(updatedNote));
    };

    const setNoteType = (type) => {
        setNote({ ...note, noteType: type });
    };

    const { noteType } = note;

    return (
        <TypeContext.Provider value={{
            noteType, setNoteType,
            setNote
        }}>
            {children}
        </TypeContext.Provider>
    );
};

// Custom hook
export const useType = () => useContext(TypeContext);