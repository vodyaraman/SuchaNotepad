import React, { useState, useCallback } from "react";
import { InputText } from "../../../Pull/Note";
import { useNoteText } from '../Hooks/note-api-hooks';

const EditNote = () => {
    const [noteText, updateNoteText] = useNoteText();
    const [inputValue, setInputValue] = useState(noteText.text[0]);

    console.log("Render note edit");

    const handleTextChange = useCallback((newText) => {
        if (newText !== inputValue) {
            setInputValue(newText);
            const updatedText = [newText, ...noteText.text.slice(1)];
            updateNoteText({ text: updatedText });
        }
    }, [inputValue, noteText.text, updateNoteText]);

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