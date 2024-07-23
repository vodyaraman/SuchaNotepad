import { useCreateNoteMutation } from '../../../Processes/Store';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

export const useAddNote = () => {
    const [createNote, { isLoading, isSuccess, isError, error }] = useCreateNoteMutation();

    const note = useSelector((state) => ({
        title: state.note.note.title,
        noteText: state.note.note.noteText,
        notePriority: state.note.note.notePriority,
        timestamp: state.note.note.timestamp,
        noteType: state.note.note.noteType,
    }));

    const handleNoteCreate = useCallback(async () => {
        try {
            const newNote = {
                title: note.title,
                noteText: note.noteText,
                notePriority: note.notePriority,
                timestamp: note.timestamp,
                noteType: note.noteType,
            };
            await createNote(newNote);
        } catch (err) {
            console.error('Failed to create note:', err);
        }
    }, [createNote, note]);

    return { handleNoteCreate, isLoading, isSuccess, isError, error };
};
