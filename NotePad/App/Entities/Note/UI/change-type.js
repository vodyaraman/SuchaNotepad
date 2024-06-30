import React from 'react';
import { Switcher } from '../../../Pull/Buttons';
import { useText } from '../Helpers/note-manager';

// Эта сущность обращается к переключателю состояний, который ориентирован на работу с индексами числовыми
// Передаёт ему надписи, в этом случае типы заметок, возвращает по нажатию соответствующий индекс
// Возвращённый индекс отправляется в Контекст АПИ и заполняет поле (состояние) noteType

const NoteChangeType = () => {
  const { noteType, setNoteType } = useText();

  const handleSwitchChange = (index) => {
    setNoteType(index);
    console.log(index);
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

