import { io } from 'socket.io-client';
import { store } from './App/Processes/Store';
import { addNote, updateNote, deleteNote } from './App/Processes/Note/API/note-slice';

let socket;

export const initWebSocket = (serverUrl) => {
    socket = io(serverUrl);

    socket.on('connect', () => {
        console.log('Connected to server:', socket.id);
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });

    // Обработка событий создания, обновления и удаления заметок
    socket.on('noteCreated', (data) => {
        console.log('Note created:', data.note);
        store.dispatch(addNote(data.note));
    });

    socket.on('noteUpdated', (data) => {
        console.log('Note updated:', data.note);
        store.dispatch(updateNote(data.note));
    });

    socket.on('noteDeleted', (data) => {
        console.log('Note deleted:', data.noteId);
        store.dispatch(deleteNote(data.noteId));
    });
};

export const getSocket = () => {
    if (!socket) {
        throw new Error('Socket.io client not initialized!');
    }
    return socket;
};
