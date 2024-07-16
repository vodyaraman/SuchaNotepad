import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetNoteByIdQuery } from '../../../Processes/Store';
import { setNoteText } from '../../../Processes/Store';

export const useGetNoteById = (id) => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetNoteByIdQuery(id);
  
  const note = useSelector((state) => state.note.notes.find(note => note._id === id));
  const noteText = useSelector((state) => state.note.noteText);

  useEffect(() => {
    if (data) {
      dispatch(setNoteText(data));
    }
  }, [data, dispatch]);

  console.log('текст заметки в хуке:', data);
  console.log('текст заметки из редакса в хуке:', noteText);

  return { note, noteText, isLoading, error };
};


