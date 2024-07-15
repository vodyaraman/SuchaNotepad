import React from "react";
import { NoteUser, NoteTitle, Note, NoteBackground } from "../../../Entities/Note";
import { FullScaledNotePlate } from "../../../Pull/Note";
import { useGetNoteById } from "../Hooks/use-get-note";

const NoteCheck = ( id ) => {
  const { note } = useGetNoteById(id.route.params);

  return (
    <FullScaledNotePlate
      User={() => <NoteUser fontWeight="bold"/>}
      Title={() => <NoteTitle flex="center" fontWeight="bold" fontSize={18}/>}
      Note={() => <Note/>}
      Background={() => <NoteBackground/>}
    />
  );
};

export default NoteCheck;


