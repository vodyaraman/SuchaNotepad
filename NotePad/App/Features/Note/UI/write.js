import React from "react";
import { NoteUser, EditNote, EditNoteTitle } from "../../../Entities/Note";
import { FullScaledNotePlate, getNoteType } from "../../../Pull/Note";

const NoteWrite = ({ note = { type: 'important', content: 'Контент' } }) => {
    const noteProps = getNoteType(note);

    return (
        <FullScaledNotePlate
            backgroundColor={noteProps.backgroundColor}
            height="100%"
            Orion={() => <NoteUser 
                fontWeight={"bold"}
            />}
            Scorpius={() => <EditNoteTitle 
                fontWeight={"bold"}
                fontSize={18}
            />}
            Andromeda={() => <EditNote 
                note={note}
                numberOfLines={null}
            />}
        />
    );
};

export default NoteWrite;