import React from "react";
import { NoteUser, NoteTitle, Note, NoteBackground } from "../../../Entities/Note";
import { FullScaledNotePlate } from "../../../Pull/Note";
import { useGetNoteById } from "../Hooks/use-get-note";

const NoteCheck = React.memo((id) => {
  const { note } = useGetNoteById(id?.route.params);

  console.log('NoteCheck renders with note:', note);
  return (
    <FullScaledNotePlate
      User={() => (note ? <NoteUser fontWeight="bold" userName={note.ownerId.name} /> : null)}
      Title={() => (note ? <NoteTitle flex="center" fontWeight="bold" fontSize={18} title={note.title} /> : null)}
      Note={() => (note ? <Note text={note.noteText.text[0]} /> : null)}
      Background={() => <NoteBackground />}
  />);
});

export default NoteCheck;
