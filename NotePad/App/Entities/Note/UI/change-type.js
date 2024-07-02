import React from 'react';
import { Switcher } from '../../../Pull/Buttons';
import { useType } from '../Helpers/type-manager';

const NoteChangeType = () => {
  const { noteType, setNoteType } = useType();

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


