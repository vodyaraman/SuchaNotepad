import React, { useState } from "react";
import { InputText } from "../../../Pull/Note";

const EditNoteTitle = ({flex = 'center', fontWeight = "normal", fontSize=14 }) => {
    const [text, setText] = useState("Заголовок заметки");
    const [textColor, setTextColor] = useState("#0d0c0c");
    return (
    <>
        <InputText
            textColor={textColor} 
            text={text} 
            textAlign={flex} 
            fontWeight={fontWeight}
            fontSize={fontSize}
            placeholder="Enter title"
            multiline={false}
        />
    </>
)};

export default EditNoteTitle;