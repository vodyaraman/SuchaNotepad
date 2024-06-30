// src/entities/Note/NoteBackgroundProvider.jsx
import React, { useState, useEffect } from "react";
import { FullScaledNotePlate, getNoteType } from "../../../Pull/Note";
import { useText } from "../Helpers/note-manager";

const NoteBackgroundProvider = ({ Title, Note, Extra, Timezone, height = "100%" }) => {
    const { noteType } = useText();
    const [noteConf, setNoteConf] = useState(getNoteType(noteType));

    useEffect(() => {
        const newNoteConf = getNoteType(noteType);
        setNoteConf(newNoteConf);
        console.log(`Цвет заметки изменен на: ${newNoteConf.backgroundColor}`);
    }, [noteType]);

    console.log('Render NoteWrite');

    return (
        <FullScaledNotePlate backgroundColor={noteConf} height={height}>
            {Title && <Title />}
            {Note && <Note />}
            {Extra && <Extra />}
            {noteConf.timezone ? (Timezone && <Timezone />) : null}
        </FullScaledNotePlate>
    );
};

export default NoteBackgroundProvider;
