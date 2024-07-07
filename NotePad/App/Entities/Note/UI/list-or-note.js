import React from 'react';
import { useType } from '../Helpers/type-manager';
import EditNote from './edit-note';
import EditNoteList from './edit-note-list';

const EditListOrNote = () => {
  const { noteType } = useType();

  return (
    <>
      {noteType === 1 ? <EditNoteList /> : <EditNote />}
    </>
  );
};

export default EditListOrNote;
