import React, { useState } from "react";
import { InputText } from "../../../Pull/Note";

const NoteEditTitle = () => {
    const [text, setText] = useState("Заголовок заметки");
    const [textColor, setTextColor] = useState("#0d0c0c");
    return (
    <>
        <InputText
            textColor={textColor} 
            text={text} 
            flex={flex} 
            fontWeight={fontWeight}
            fontSize={fontSize}
        />
    </>
)};

export default NoteEditTitle;