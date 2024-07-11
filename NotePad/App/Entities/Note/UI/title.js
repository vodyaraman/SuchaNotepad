import React, {useState} from "react";
import { CustomText } from "../../../Pull/Note";
import { useNoteTitle } from '../Hooks/note-api-hooks';

const NoteTitle = ({ flex = 'flex-start', fontWeight = "normal", fontSize=18 }) => {
    const [noteTitle, updateNoteTitle] = useNoteTitle();
    const [textColor, setTextColor] = useState("#0d0c0c");

    return (
    <>
        <CustomText 
            textColor={textColor} 
            text={noteTitle} 
            flex={flex} 
            fontWeight={fontWeight}
            fontSize={fontSize}
            onChangeText={updateNoteTitle}
            placeholder="Enter title"
            multiline={false}
        />
    </>
)};

export default NoteTitle;
