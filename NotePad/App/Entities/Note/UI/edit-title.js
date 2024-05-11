import React, { useState } from "react";
import { InputText } from "../../../Pull/Note";

const EditNoteTitle = ({flex = 'center', fontWeight = "normal", fontSize=16}) => {
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
        />
    </>
)};

export default EditNoteTitle;