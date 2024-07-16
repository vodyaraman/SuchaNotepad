import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetNoteByIdQuery } from '../../../Processes/Store';
import { setNoteTitle, setNoteText, setUserName, setUserID, setNotePriority, setTimestamp, setNoteType } from '../../../Processes/Store';

export const useGetNoteById = (id) => {
  const dispatch = useDispatch();

  const { data: noteTextData, isLoading, error } = useGetNoteByIdQuery(id, { skip: !id });

  const note = useSelector((state) => state.note.notes.find(note => note._id === id));
  const noteTitle = useSelector((state) => state.note.noteTitle);
  const noteText = useSelector((state) => state.note.noteText);
  const userName = useSelector((state) => state.note.userName);
  const userID = useSelector((state) => state.note.userID);
  const notePriority = useSelector((state) => state.note.notePriority);
  const timestamp = useSelector((state) => state.note.timestamp);
  const noteType = useSelector((state) => state.note.noteType);

  useEffect(() => {
    if (note) {
      dispatch(setNoteTitle(note.title));
      dispatch(setUserName(note.userName));
      dispatch(setUserID(note.userID));
      dispatch(setNotePriority(note.priority));
      dispatch(setTimestamp(note.timestamp));
      dispatch(setNoteType(note.type));
    }
    if (noteTextData) {
      dispatch(setNoteText(noteTextData.noteText));
    }
  }, [note, noteTextData, dispatch]);

  return { note, noteTitle, noteText, userName, userID, notePriority, timestamp, noteType, isLoading, error };
};
