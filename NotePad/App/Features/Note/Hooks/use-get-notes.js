import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetNotesListQuery, setNotes} from '../../../Processes/Store';

export const useGetNotes = () => {
    const dispatch = useDispatch();
    const notesFromStore = useSelector((state) => state.note.notes);

    const { data: notes = [], isLoading, error, isFetching } = useGetNotesListQuery();

    useEffect(() => {
        if (!isFetching && notes.length) {
            dispatch(setNotes(notes));
        }
    }, [notes, isFetching, dispatch]);

    return { notes: notesFromStore, isLoading, error };
};

