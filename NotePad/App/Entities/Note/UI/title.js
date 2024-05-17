import React, { useState } from "react";
import { CustomText } from "../../../Pull/Note";

const NoteTitle = ({flex = 'flex-start', fontWeight = "normal", fontSize=18}) => {
    const [text, setText] = useState("Заголовок заметки");
    const [textColor, setTextColor] = useState("#0d0c0c");
    return (
    <>
        <CustomText 
            textColor={textColor} 
            text={text} 
            flex={flex} 
            fontWeight={fontWeight}
            fontSize={fontSize}
        />
    </>
)};

export default NoteTitle;