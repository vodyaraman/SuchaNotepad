import mongoose from '../mongoDB.js';

const noteAccessSchema = new mongoose.Schema({
    noteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note',
        required: true,
    },
    groupIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true,
    }],
});

// Ensure unique access entries for noteId and groupId combinations
noteAccessSchema.index({ noteId: 1, groupIds: 1 }, { unique: true });

export default mongoose.model('NoteAccess', noteAccessSchema);

