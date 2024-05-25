import NoteModel from '../models/note.js';

export const create = async (req, res) => {
    try {
        const { userId = req.userId, noteType, title, noteText, notePriority, timestamp } = req.body;

        const newNote = new NoteModel({
            userId,
            noteType,
            title,
            noteText,
            notePriority,
            timestamp,
            dateCreated: Date.now(),
        });

        const post = await newNote.save();

        res.json({ post });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create note' });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedNote = await NoteModel.findByIdAndUpdate(id, updateData, { new: true });

        res.json({ updatedNote });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update note' });
    }
};

export const getNotes = async (req, res) => {
    try {
        const notes = await NoteModel.find({ userId: req.userId });

        res.json({ notes });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
};
