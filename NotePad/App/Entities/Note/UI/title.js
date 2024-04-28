import React, { useState } from "react";
import { CustomText } from "../../../Pull/Note";

const NoteTitle = () => {
    const [text, setText] = useState("Заголовок заметки");
    const [textColor, setTextColor] = useState("#0d0c0c");
    return (
    <>
        <CustomText textColor={textColor} text={text} flex="start"/>
    </>
)};

export default NoteTitle;