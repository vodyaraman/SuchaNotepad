import React, { useState } from "react";
import { CustomText } from "../../../Pull/Note";

const NoteUser = ({fontWeight = 'normal'}) => {
    const [text, setText] = useState("Антон Саевский");
    const [textColor, setTextColor] = useState("#fc7303");
    return (
    <>
        <CustomText textColor={textColor} text={text} flex="start" fontWeight={fontWeight}/>
    </>
)};

export default NoteUser;