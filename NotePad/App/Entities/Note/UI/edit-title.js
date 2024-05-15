import React from "react";
import { InputText } from "../../../Pull/Note";
import { useText } from '../../../Features/Note/index';

const EditNoteTitle = ({ flex = 'center', fontWeight = "normal", fontSize = 14 }) => {
    const { noteTitle, setNoteTitle } = useText();
    return (
        <InputText
            textColor="#0d0c0c"
            text={noteTitle}
            onChangeText={setNoteTitle}
            textAlign={flex}
            fontWeight={fontWeight}
            fontSize={fontSize}
            placeholder="Enter title"
            multiline={false}
        />
    );
};

export default EditNoteTitle;
