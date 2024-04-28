import React, { useState } from "react";
import { CustomText } from "../../../Pull/Note";

const NoteUser = () => {
    const [text, setText] = useState("Антон Саевский");
    const [textColor, setTextColor] = useState("#fc7303");
    return (
    <>
        <CustomText textColor={textColor} text={text} flex="start"/>
    </>
)};

export default NoteUser;