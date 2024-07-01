import React from 'react';
import { Switcher } from '../../../Pull/Buttons';
import { useText } from '../Helpers/note-manager';

const NoteChangeType = () => {
  const { noteType, setNoteType } = useText();

  const handleSwitchChange = (index) => {
    if (index !== noteType) {
      setNoteType(index);
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


