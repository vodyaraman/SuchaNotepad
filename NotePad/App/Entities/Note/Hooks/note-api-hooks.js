import { useDispatch, useSelector } from 'react-redux';
import { 
    setLoading,
    setError,
    addNote,
    updateNote,
    deleteNote,
    setNote,
} from '../../../Processes/Note';

// Hook for loading state
export const useLoading = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.note.loading);
    
    const updateLoading = (loading) => {
        dispatch(setLoading(loading));
    };

    return [loading, updateLoading];
};

// Hook for error state
export const useError = () => {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.note.error);
    
    const updateError = (error) => {
        dispatch(setError(error));
    };

    return [error, updateError];
};

// Hook for individual note state
export const useNote = () => {
    const dispatch = useDispatch();
    const note = useSelector((state) => state.note.note);

    console.log(note);
    
    const updateNote = (note) => {
        dispatch(setNote(note));
    };

    return [note, updateNote];
};

// Hook for adding a note
export const useAddNote = () => {
    const dispatch = useDispatch();
    
    const addNewNote = (note) => {
        dispatch(addNote(note));
    };

    return addNewNote;
};

// Hook for updating a note
export const useUpdateNote = () => {
    const dispatch = useDispatch();
    
    const modifyNote = (note) => {
        dispatch(updateNote(note));
    };

    return modifyNote;
};

// Hook for deleting a note
export const useDeleteNote = () => {
    const dispatch = useDispatch();
    
    const removeNote = (id) => {
        dispatch(deleteNote(id));
    };

    return removeNote;
};