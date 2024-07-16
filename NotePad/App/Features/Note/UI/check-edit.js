import React from "react";
import { NoteUser, NoteTitle, Note, NoteBackground } from "../../../Entities/Note";
import { FullScaledNotePlate } from "../../../Pull/Note";
import { useGetNoteById } from "../Hooks/use-get-note";

const NoteCheck = ( id ) => {
  const { note, noteText } = useGetNoteById(id.route.params);
  console.log(note);
  return (
    <FullScaledNotePlate
      User={() => <NoteUser fontWeight="bold" userName={note.ownerId.name}/>}
      Title={() => <NoteTitle flex="center" fontWeight="bold" fontSize={18} title={note.title}/>}
      Note={() => <Note noteText={noteText.text[0]}/>}
      Background={() => <NoteBackground/>}
    />
  );
};

export default NoteCheck;


