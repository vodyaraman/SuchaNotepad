import React, { createContext, useContext, useState } from 'react';

// Context to manage note content
export const TextContext = createContext();

// Provider
export const NoteManagerProvider = ({ children }) => {
    const [noteTitle, setNoteTitle] = useState("Заголовок заметки");
    const [noteText, setNoteText] = useState("Default text that might be large and span multiple lines, requiring some additional formatting like justification.");
    const [userName, setUserName] = useState("Павел Башкирцев");
    const [notePriority, setNotePriority] = useState(true);
    const [timestamp, setTimestamp] = useState({isTemporary: false, dateStart: new Date(), dateEnd: new Date()});
    const [noteType, setNoteType] = useState(2);

    console.log(noteTitle, noteText, userName, notePriority, timestamp, noteType)
    return (
        <TextContext.Provider value={{
             noteTitle, setNoteTitle,
             noteText, setNoteText, 
             userName, setUserName,
             notePriority, setNotePriority,
             timestamp, setTimestamp,
             noteType, setNoteType }}>
            {children}
        </TextContext.Provider>
    );
};

// Custom hook
export const useText = () => useContext(TextContext);

/*
export const noteData = () => {
    const { noteTitle, noteText, userName, notePriority, timestamp, noteType } = useContext(TextContext);
    return {
        title: noteTitle,
        content: noteText,
        user: userName,
        priority: notePriority,
        date: timestamp,
        type: noteType
    };
};
*/
