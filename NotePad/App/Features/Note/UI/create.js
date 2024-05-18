import React from "react";
import { NoteUser, EditNote, EditNoteTitle, NoteAddEdit, NoteChangeType, NoteManagerProvider } from "../../../Entities/Note";
import { FullScaledNotePlate, getNoteType } from "../../../Pull/Note";

const NoteWrite = ({ note = { type: 'important', content: 'Контент' } }) => {
    const noteProps = getNoteType(note);

    return (
        <NoteManagerProvider>
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
        </NoteManagerProvider>
    );
};

export default NoteWrite;