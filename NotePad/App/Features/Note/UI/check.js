import React from "react";
import { NoteUser, NoteTitle, Note } from "../../../Entities/Note";
import { FullScaledNotePlate } from "../../../Pull/Note";

const NoteCheck = () => {
    return (
        <FullScaledNotePlate
            backgroundColor="#A2EFE6"
            height={60} 
            Andromeda={NoteUser}
            Scorpius={NoteTitle}
            Orion={() => <Note note={{type: 'important', content: 'Контент'}}/>}
        />
    );
};


export default NoteCheck;