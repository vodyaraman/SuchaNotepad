import React, { useState, useEffect, useCallback } from "react";
import { InputText } from "../../../Pull/Note";
import { useText } from '../Helpers/note-manager';

const EditNote = () => {
    const { noteText, setNoteText } = useText();
    const [inputValue, setInputValue] = useState(noteText.text[0]);

    console.log("Render note edit");

    const handleTextChange = useCallback((newText) => {
        if (newText !== inputValue) {
            setInputValue(newText);
            const updatedText = [newText, ...noteText.text.slice(1)];
            setNoteText({ text: updatedText });
        }
    }, [inputValue, noteText.text, setNoteText]);

    return (
        <InputText
          borderBottomColor="transparent"
          textColor={'#000'}
          value={inputValue}
          onChangeText={handleTextChange}
          multiline={true}
          height={"100%"}
          fontSize={18}
          placeholder="Enter Note"
        />
    );
};

export default EditNote;



