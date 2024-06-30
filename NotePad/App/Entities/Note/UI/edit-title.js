import React from "react";
import { InputText } from "../../../Pull/Note";
import { useText } from '../Helpers/note-manager';


const EditNoteTitle = ({ flex = 'center', fontWeight = "bold", fontSize = 20}) => {
    const { noteTitle, setNoteTitle } = useText();
    return (
        <InputText
            textColor="#0d0c0c"
            text={noteTitle}
            onChangeText={(text) => (setNoteTitle(text))}
            textAlign={flex}
            fontWeight={fontWeight}
            fontSize={fontSize}
            placeholder="Enter title"
            multiline={false}
        />
    );
};

export default EditNoteTitle;
