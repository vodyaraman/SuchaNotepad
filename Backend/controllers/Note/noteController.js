import NoteModel from '../../models/note.js';
import NoteAccess from '../../models/noteAccess.js';
import { checkNoteOwnership, checkNoteAccess, getUserGroups } from '../../utils/noteUtils.js';
import { getIo } from '../../websocket-config.js';

export const create = async (req, res) => {
    try {
        const { noteType, title, noteText, notePriority, timestamp } = req.body;
        const userId = req.userId;

        const newNote = new NoteModel({
            ownerId: userId,
            noteType,
            title,
            noteText,
            notePriority,
            timestamp,
            dateCreated: Date.now(),
        });

        const post = await newNote.save();

        // Найти все группы, к которым принадлежит пользователь
        const userGroups = await getUserGroups(userId);

        // Создать записи NoteAccess для каждой группы
        const noteAccessEntries = userGroups.map(group => ({
            noteId: post._id,
            groupId: group.groupId
        }));

        await NoteAccess.insertMany(noteAccessEntries);

        // Уведомление всех клиентов о создании новой заметки
        const io = getIo();
        io.emit('noteCreated', { note: post });

        res.status(201).json({ post });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create note' });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const updateData = req.body;

        // Проверка, что заметка принадлежит пользователю
        await checkNoteOwnership(id, userId);

        const updatedNote = await NoteModel.findByIdAndUpdate(id, updateData, { new: true });

        // Уведомление всех клиентов об обновлении заметки
        const io = getIo();
        io.emit('noteUpdated', { note: updatedNote });

        res.status(200).json({ updatedNote });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;

        // Проверка, что заметка принадлежит пользователю
        await checkNoteOwnership(id, userId);

        await NoteModel.findByIdAndDelete(id);
        await NoteAccess.deleteMany({ noteId: id });

        // Уведомление всех клиентов об удалении заметки
        const io = getIo();
        io.emit('noteDeleted', { noteId: id });

        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getNotes = async (req, res) => {
    try {
        const userId = req.userId;

        // Найти все заметки, где пользователь является владельцем
        const ownedNotes = await NoteModel.find({ ownerId: userId }).select('-noteText');

        // Найти все группы, к которым принадлежит пользователь
        const userGroups = await getUserGroups(userId);

        // Найти все заметки, к которым имеют доступ эти группы
        const accessibleNotes = await NoteAccess.find({
            groupId: { $in: userGroups.map(group => group.groupId) }
        }).populate('noteId', '-noteText');

        // Извлечь заметки из accessibleNotes
        const groupNotes = accessibleNotes.map(access => access.noteId);

        // Объединить заметки и удалить дубликаты
        const notes = [...ownedNotes, ...groupNotes];
        const uniqueNotes = Array.from(new Set(notes.map(note => note._id.toString()))).map(
            id => notes.find(note => note._id.toString() === id)
        );

        res.status(200).json(uniqueNotes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
};

export const getNoteById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;

        // Найти заметку по ID
        const note = await NoteModel.findById(id).select('noteText ownerId');
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }

        // Проверка, что пользователь имеет доступ к заметке
        const isOwner = note.ownerId.toString() === userId;
        const hasAccess = await checkNoteAccess(id, userId);

        if (!isOwner && !hasAccess) {
            return res.status(403).json({ error: 'User does not have permission to access this note' });
        }

        res.status(200).json({ noteText: note.noteText, isOwner, hasAccess });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch note content' });
    }
};