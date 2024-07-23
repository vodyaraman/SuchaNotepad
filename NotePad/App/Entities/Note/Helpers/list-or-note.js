import React from 'react';
import { useNote } from '../Hooks/note-api-hooks';
import EditNote from '../UI/edit-note';
import EditNoteList from '../UI/edit-note-list';

const EditListOrNote = () => {
  const [note] = useNote();

  return (
    <>
      {note.noteType === 1 ? <EditNoteList /> : <EditNote />}
    </>
  );
};

export default EditListOrNote;
