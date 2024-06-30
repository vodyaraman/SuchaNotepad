// src/features/NoteWrite/NoteWrite.jsx
import React from "react";
import { EditNote, EditNoteTitle, NoteAddEdit, NoteChangeType, NoteBackgroundProvider} from "../../../Entities/Note";

const NoteWrite = () => {
    console.log('Render NoteWrite');
    return (
        <NoteBackgroundProvider
            Title={EditNoteTitle}
            Note={EditNote}
            Extra={NoteChangeType}
            Timezone={NoteAddEdit}
        />
    );
};

export default NoteWrite;


