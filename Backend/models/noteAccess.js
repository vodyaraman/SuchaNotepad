import mongoose from '../mongoDB.js';

const noteAccessSchema = new mongoose.Schema({
    noteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: false,
    },
});

// Ensure unique access entries for userId and groupId combinations
noteAccessSchema.index({ noteId: 1, userId: 1 }, { unique: true, sparse: true });
noteAccessSchema.index({ noteId: 1, groupId: 1 }, { unique: true, sparse: true });

noteAccessSchema.pre('save', function (next) {
    if (!this.userId && !this.groupId) {
        next(new Error('Note access must be associated with either a user or a group.'));
    } else {
        next();
    }
});

export default mongoose.model('NoteAccess', noteAccessSchema);
