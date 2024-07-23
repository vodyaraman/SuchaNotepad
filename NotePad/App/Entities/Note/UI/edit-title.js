import React, { useState, useEffect, useCallback } from "react";
import { InputText } from "../../../Pull/Note";
import { useNote } from '../Hooks/note-api-hooks';

const EditNoteTitle = ({ flex = 'center', fontWeight = "bold", fontSize = 20 }) => {
    const [note, updateNote] = useNote();
    const [title, setTitle] = useState(note.title);

    useEffect(() => {
        setTitle(note.title);
    }, [note.title]);

    const handleTitleChange = useCallback((newTitle) => {
        if (newTitle !== title) {
            setTitle(newTitle);
            const updatedNote = { ...note, title: newTitle };
            updateNote(updatedNote);
        }
    }, [title, note, updateNote]);

    return (
        <InputText
            text={title ? title : ""}
            onChangeText={handleTitleChange}
            textAlign={flex}
            fontWeight={fontWeight}
            fontSize={fontSize}
            placeholder="Enter title"
            multiline={false}
        />
    );
};

export default EditNoteTitle;
