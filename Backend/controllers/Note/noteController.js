import NoteModel from '../../models/note.js';
import NoteAccess from '../../models/noteAccess.js';
import GroupMember from '../../models/groupMember.js';

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
        const userGroups = await GroupMember.find({ userId }).select('groupId');

        // Создать записи NoteAccess для каждой группы
        const noteAccessEntries = userGroups.map(group => ({
            noteId: post._id,
            groupId: group.groupId
        }));

        await NoteAccess.insertMany(noteAccessEntries);

        res.status(201).json({ post });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create note' });
    }
};

