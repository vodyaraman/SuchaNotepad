import React from "react";
import { EditNoteTitle, NoteAddEdit, EditListOrNote, NoteBackground, NoteChangeType } from "../../../Entities/Note";
import { FullScaledNotePlate } from "../../../Pull/Note";

const NoteWrite = React.memo(() => {
    console.log('rendering NoteWrite...');

    return (
        <FullScaledNotePlate
            Background={NoteBackground}
            Title={EditNoteTitle}
            Note={EditListOrNote}
            Timezone={NoteAddEdit}
            Extra={NoteChangeType}
        />
    );
});

export default NoteWrite;






