import { useCreateNoteMutation } from '../../../Processes/Note/API/note-api';
import { useSelector } from 'react-redux';

export const useAddNote = () => {
    const [createNote, { isLoading, isSuccess, isError, error }] = useCreateNoteMutation();
    const note = useSelector((state) => state.note);

    const handleNoteCreate = async () => {
        try {
            await createNote(note).unwrap();
            console.log('Note created successfully');
        } catch (err) {
            console.error('Failed to create note: ', err);
        }
    };

    return {
        handleNoteCreate,
        isLoading,
        isSuccess,
        isError,
        error
    };
};

