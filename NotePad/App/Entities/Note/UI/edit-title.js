import React, { useCallback } from "react";
import { InputText } from "../../../Pull/Note";
import { useNoteForm } from '../Hooks/note-form';

const EditNoteTitle = ({ flex = 'center', fontWeight = "bold", fontSize = 20 }) => {
    const { note, setTitle } = useNoteForm();
    
    console.log('Rendering noteTitle with title', note.title)

    const handleTitleChange = useCallback((newTitle) => {
        if (newTitle !== note.title) {
            setTitle(newTitle);
        }
    }, [note.title, setTitle]);

    return (
        <InputText
            text={note.title}
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

