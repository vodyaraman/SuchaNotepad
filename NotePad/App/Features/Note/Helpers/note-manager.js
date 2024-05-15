import React, { createContext, useContext, useState } from 'react';

// Context управления контентом заметок
const TextContext = createContext();

// Провайдер
export const NoteManagerProvider = ({ children }) => {
    const [noteTitle, setNoteTitle] = useState("Заголовок заметки");
    const [noteText, setNoteText] = useState("Текст по умолчанию достаточно большой, возможно, он занимает больше одной строки и ему требуется какое-то дополнительное форматирование по типу выравнивания по ширине");
    const [userName, setUserName] = useState("Антон Саевский");

    console.log("Context Values:", { noteTitle, noteText, userName });

    return (
        <TextContext.Provider value={{ noteTitle, setNoteTitle, noteText, setNoteText, userName, setUserName }}>
            {children}
        </TextContext.Provider>
    );
};

// Кастомный вебхук
export const useText = () => useContext(TextContext);
