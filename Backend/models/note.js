import mongoose from '../mongoDB.js';

export const listItemSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

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
        type: mongoose.Schema.Types.Mixed, // Может быть строкой или массивом объектов
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


