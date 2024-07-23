import React from 'react';
import { Switcher } from '../../../Pull/Buttons';
import { useNote } from '../Hooks/note-api-hooks';

const NoteChangeType = () => {
  const [note, updateNote] = useNote();
  const { noteType } = note;

  const handleSwitchChange = (index) => {
    if (index !== noteType) {
      updateNote({
        ...note,
        noteType: index
      });
    }
  };

  return (
    <Switcher
      initialActive={noteType}
      onChange={handleSwitchChange}
      width="94%"
      height={40}
      totalStates={3}
      stateLabels={['Заметка 📒', 'Список📋', 'На время⌚️']}
    />
  );
};

export default NoteChangeType;
