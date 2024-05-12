import React from "react";
import { NoteUser, EditNote, EditNoteTitle } from "../../../Entities/Note";
import { FullScaledNotePlate, getNoteType } from "../../../Pull/Note";
import { Switcher } from "../../../Pull/Buttons";

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
                fontSize={14}
            />}
            Andromeda={() => {return (
                <>
                    <EditNote 
                        note={note}
                        numberOfLines={null}
                    />
                    <Switcher/>
                </>
        )}}/>  
    );
};

export default NoteWrite;