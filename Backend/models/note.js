import mongoose from '../mongoDB.js';

const noteSchema = new mongoose.Schema({
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    noteType: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    noteText: {
        type: String,
        required: true,
    },
    notePriority: {
        type: Boolean,
        default: false,
    },
    timestamp: {
        isTemporary: {
            type: Boolean,
            default: false,
        },
        dateStart: {
            type: Date,
            required: false,
        },
        dateEnd: {
            type: Date,
            required: false,
        },
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('Note', noteSchema);

