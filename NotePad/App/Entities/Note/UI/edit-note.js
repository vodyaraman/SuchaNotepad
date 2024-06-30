import React from "react";
import { InputText } from "../../../Pull/Note";
import { useText } from '../Helpers/note-manager';

const EditNote = ({ textColor = '#000', fontSize = 18 }) => {
    const { noteText, setNoteText } = useText();
    
    const handleChangeText = (text) => {
        setNoteText(text);
    };

    return (
        <InputText
          textColor={textColor}
          text={noteText}
          onChangeText={handleChangeText}
          multiline={true}
          height={"100%"}
          fontSize={fontSize}
        />
    );
};

export default EditNote;


