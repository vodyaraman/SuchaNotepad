import React from "react";
import { NoteUser, EditNote, EditNoteTitle } from "../../../Entities/Note";
import { FullScaledNotePlate, getNoteType } from "../../../Pull/Note";
import { Switcher } from "../../../Pull/Buttons";
import { NoteManagerProvider } from "../Helpers/note-manager";

const NoteWrite = ({ note = { type: 'important', content: 'Контент' } }) => {
    const noteProps = getNoteType(note);

    return (
        <NoteManagerProvider>
            <FullScaledNotePlate
                backgroundColor={noteProps.backgroundColor}
                height="100%"
                Orion={NoteUser}
                Scorpius={EditNoteTitle}
                Andromeda={() => (
                    <>
                        <EditNote/>
                        <Switcher/>
                    </>
                )}
            />
        </NoteManagerProvider>
    );
};

export default NoteWrite;