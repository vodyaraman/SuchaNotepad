import React from "react";
import { NoteUser, EditNote, EditNoteTitle, NoteAddEdit, NoteChangeType } from "../../../Entities/Note";
import { FullScaledNotePlate, getNoteType } from "../../../Pull/Note";

const NoteWrite = ({ note = { type: 'important', content: 'Контент' } }) => {
    const noteProps = getNoteType(note);

    return (
            <FullScaledNotePlate
                backgroundColor={noteProps.backgroundColor}
                height="100%"
                Orion={() => (
                    <>
                        <NoteUser/>
                    </>    
                )}
                Scorpius={() => (
                    <>
                        <EditNoteTitle/>
                    </>    
                )}
                Andromeda={() => (
                    <>
                        <EditNote/>
                    </>
                )}
                Prometheus={() => (
                    <>
                        <NoteAddEdit/>
                        <NoteChangeType/>
                    </>
                )}
            />
    );
};

export default NoteWrite;