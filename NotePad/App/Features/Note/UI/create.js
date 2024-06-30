import React from "react";
import { EditNote, EditNoteTitle, NoteAddEdit, NoteChangeType } from "../../../Entities/Note";
import { FullScaledNotePlate, getNoteType } from "../../../Pull/Note";

const NoteWrite = ({ note = { type: 'important', content: 'Контент' } }) => {
    const noteProps = getNoteType(note);

    return (
        <FullScaledNotePlate
            backgroundColor={noteProps.backgroundColor}
            height="100%"
            Title={() => (
                <>
                    <EditNoteTitle/>
                </>    
            )}
            Note={() => (
                <>
                    <EditNote/>
                </>
            )}
            Extra={() => (
                <>
                    <NoteAddEdit/>
                    <NoteChangeType/>
                </>
            )}
        />
    );
};

export default NoteWrite;
