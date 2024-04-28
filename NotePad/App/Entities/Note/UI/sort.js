import React, { useState } from "react";
import { CustomSmallText, SmallUnderplate } from "../../../Pull/Note";

//Используем для кнопок сортировки заметок

const NoteSort = () => {
    const [text, setText] = useState("A-Z");

    return (
    <SmallUnderplate>
        <CustomSmallText text={text}/>
    </SmallUnderplate>
)};

export default NoteSort;