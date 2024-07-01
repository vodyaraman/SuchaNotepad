import React from "react";
import { EditNote, EditNoteTitle, NoteAddEdit, NoteBackground, NoteChangeType } from "../../../Entities/Note";
import { FullScaledNotePlate } from "../../../Pull/Note";

const NoteWrite = () => {
    console.log('rendering NoteWrite...')
    return (
        <FullScaledNotePlate
            Background={NoteBackground}
            Title={EditNoteTitle}
            Note={EditNote}
            Extra={NoteChangeType}
            Timezone={NoteAddEdit}
        />
    );
};

export default NoteWrite;



