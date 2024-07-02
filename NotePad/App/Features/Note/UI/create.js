import React from "react";
import { EditNote, EditNoteList, EditNoteTitle, NoteAddEdit, NoteBackground, NoteChangeType } from "../../../Entities/Note";
import { FullScaledNotePlate } from "../../../Pull/Note";
import { useType } from "../../../Entities/Note/Helpers/type-manager";

const NoteWrite = () => {
    const { noteType } = useType();

    console.log('rendering NoteWrite...');

    return (
        <FullScaledNotePlate
            Background={NoteBackground}
            Title={EditNoteTitle}
            Note={noteType == 1 ? EditNoteList : EditNote}
            Timezone={NoteAddEdit}
            Extra={NoteChangeType}
        />
    );
};

export default NoteWrite;






