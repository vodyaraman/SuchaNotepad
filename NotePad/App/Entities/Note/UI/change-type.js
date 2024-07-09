import React from 'react';
import { Switcher } from '../../../Pull/Buttons';
import { useNoteType } from '../Hooks/note-api-hooks';

const NoteChangeType = () => {
  const [noteType, updateNoteType] = useNoteType();

  const handleSwitchChange = (index) => {
    if (index !== noteType) {
      updateNoteType(index);
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