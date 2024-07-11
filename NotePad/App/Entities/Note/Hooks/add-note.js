import { useCreateNoteMutation } from '../../../Processes/Store';
import { useSelector } from 'react-redux';

export const useAddNote = () => {
    const [createNote, { isLoading, isSuccess, isError, error }] = useCreateNoteMutation();

    const noteTitle = useSelector((state) => state.note.noteTitle);
    const noteText = useSelector((state) => state.note.noteText);
    const notePriority = useSelector((state) => state.note.notePriority);
    const timestamp = useSelector((state) => state.note.timestamp);
    const noteType = useSelector((state) => state.note.noteType);

    const handleNoteCreate = async () => {
        try {
            const newNote = {
                title: noteTitle,
                noteText: noteText,
                notePriority,
                timestamp,
                noteType,
            };
            await createNote(newNote);
        } catch (err) {
            console.error('Failed to create note:', err);
        }
    };

    return { handleNoteCreate, isLoading, isSuccess, isError, error };
};

