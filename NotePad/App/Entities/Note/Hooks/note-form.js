import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useNoteForm = () => {
  const selectedNote = useSelector(state => state.note.note);

  const [note, setNote] = useState(selectedNote);

  useEffect(() => {
    if (selectedNote) {
      setNote(selectedNote);
    }
  }, [selectedNote]);

  const setTitle = (title) => {
    setNote(prevNote => ({ ...prevNote, title }));
  };

  const setNoteText = (text) => {
    setNote(prevNote => ({ 
      ...prevNote, 
      noteText: { ...prevNote.noteText, text: [text] } 
    }));
  };

  const setOwnerId = (name) => {
    setNote(prevNote => ({ 
      ...prevNote, 
      ownerId: { ...prevNote.ownerId, name } 
    }));
  };

  const setNotePriority = (notePriority) => {
    setNote(prevNote => ({ ...prevNote, notePriority }));
  };

  const setTimestamp = (timestamp) => {
    setNote(prevNote => ({ ...prevNote, timestamp }));
  };

  const setNoteType = (noteType) => {
    setNote(prevNote => ({ ...prevNote, noteType }));
  };

  return {
    note,
    setTitle,
    setNoteText,
    setOwnerId,
    setNotePriority,
    setTimestamp,
    setNoteType,
  };
};

export default useNoteForm;

