import React from "react";
import { InputText } from "../../../Pull/Note";
import { useNoteTitle } from '../Hooks/note-api-hooks';

const EditNoteTitle = ({ flex = 'center', fontWeight = "bold", fontSize = 20}) => {
    const [noteTitle, updateNoteTitle] = useNoteTitle();
    return (
        <InputText
            text={noteTitle}
            onChangeText={(text) => (updateNoteTitle(text))}
            textAlign={flex}
            fontWeight={fontWeight}
            fontSize={fontSize}
            placeholder="Enter title"
            multiline={false}
        />
    );
};

export default EditNoteTitle;