import React, { useState, useEffect, useCallback } from "react";
import { InputText } from "../../../Pull/Note";
import { useNote } from '../Hooks/note-api-hooks';

const EditNote = () => {
  const [note, updateNote] = useNote();
  const [inputValue, setInputValue] = useState(note.noteText.text[0]);

  useEffect(() => {
    setInputValue(note.noteText.text[0]);
  }, [note.noteText.text]);

  const handleTextChange = useCallback((newText) => {
    if (newText !== inputValue) {
      setInputValue(newText);
      const updatedNote = {
        ...note,
        noteText: { text: [newText, ...note.noteText.text.slice(1)] }
      };
      updateNote(updatedNote);
    }
  }, [inputValue, note, updateNote]);

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

