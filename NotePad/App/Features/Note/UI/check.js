import React from "react";
import { NoteUser, NoteTitle, Note } from "../../../Entities/Note";
import { FullScaledNotePlate, getNoteType } from "../../../Pull/Note";

const NoteCheck = ({ note = { type: 'important', content: 'Контент' } }) => {
    const noteProps = getNoteType(note);

    return (
        <FullScaledNotePlate
            backgroundColor={noteProps.backgroundColor}
            height="100%"
            Orion={() => <NoteUser 
                fontWeight={"bold"}
            />}
            Scorpius={() => <NoteTitle 
                flex={"center"}
                fontWeight={"bold"}
                fontSize={18}
            />}
            Andromeda={() => <Note 
                note={note}
            />}
        />
    );
};

export default NoteCheck;
