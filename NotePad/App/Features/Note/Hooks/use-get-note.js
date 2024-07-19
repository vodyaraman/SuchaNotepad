import { useSelector } from 'react-redux';
import { selectNoteById } from '../../../Processes/Note/selectors';

export const useGetNoteById = (id) => {
  const note = useSelector((state) => selectNoteById(state, id));

  return { note };
};