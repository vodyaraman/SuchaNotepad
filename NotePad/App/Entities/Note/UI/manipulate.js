import React, { useState } from "react";
import { CustomSmallText, SmallUnderplate } from "../../../Pull/Note";

// Используем для стилизации кнопок настройки заметок, в т.ч уведомлений и настроек уведомлений

const NoteManipulate = () => {
    const [text, setText] = useState("5/10");

    return (
    <SmallUnderplate>
        <CustomSmallText text={text}/>
    </SmallUnderplate>
)};

export default NoteManipulate;