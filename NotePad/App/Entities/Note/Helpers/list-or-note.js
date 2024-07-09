import React from 'react';
import { useNoteType } from '../Hooks/note-api-hooks';
import EditNote from '../UI/edit-note';
import EditNoteList from '../UI/edit-note-list';

const EditListOrNote = () => {
  const [noteType] = useNoteType();

  return (
    <>
      {noteType === 1 ? <EditNoteList /> : <EditNote />}
    </>
  );
};

export default EditListOrNote;