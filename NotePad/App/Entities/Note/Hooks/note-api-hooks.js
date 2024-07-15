import { useDispatch, useSelector } from 'react-redux';
import { 
    setNoteTitle,
    setNoteText,
    setUserName,
    setNotePriority,
    setTimestamp,
    setNoteType,
    addNote,
    updateNote,
    deleteNote
} from '../../../Processes/Note';

export const useNoteTitle = () => {
    const dispatch = useDispatch();
    const noteTitle = useSelector((state) => state.note.noteTitle);
    
    const updateNoteTitle = (title) => {
        dispatch(setNoteTitle(title));
    };

    return [noteTitle, updateNoteTitle];
};

export const useNoteText = () => {
    const dispatch = useDispatch();
    const noteText = useSelector((state) => state.note.noteText.text[0]);

    const updateNoteText = (text) => {
        dispatch(setNoteText({ text: [text] }));
    };

    return [noteText, updateNoteText];
};

export const useUserName = () => {
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.note.userName);
    
    const updateUserName = (name) => {
        dispatch(setUserName(name));
    };

    return [userName, updateUserName];
};

export const useNotePriority = () => {
    const dispatch = useDispatch();
    const notePriority = useSelector((state) => state.note.notePriority);
    
    const updateNotePriority = (priority) => {
        dispatch(setNotePriority(priority));
    };

    return [notePriority, updateNotePriority];
};

export const useTimestamp = () => {
    const dispatch = useDispatch();
    const timestamp = useSelector((state) => state.note.timestamp);
    
    const updateTimestamp = (timestamp) => {
        dispatch(setTimestamp(timestamp));
    };

    return [timestamp, updateTimestamp];
};

export const useNoteType = () => {
    const dispatch = useDispatch();
    const noteType = useSelector((state) => state.note.noteType);
    
    const updateNoteType = (type) => {
        dispatch(setNoteType(type));
    };

    return [noteType, updateNoteType];
};

export const useAddNote = () => {
    const dispatch = useDispatch();
    
    const addNewNote = (note) => {
        dispatch(addNote(note));
    };

    return addNewNote;
};

export const useUpdateNote = () => {
    const dispatch = useDispatch();
    
    const modifyNote = (note) => {
        dispatch(updateNote(note));
    };

    return modifyNote;
};

export const useDeleteNote = () => {
    const dispatch = useDispatch();
    
    const removeNote = (id) => {
        dispatch(deleteNote(id));
    };

    return removeNote;
};
