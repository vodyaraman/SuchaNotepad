import mongoose from '../mongoDB.js';

const groupSchema = new mongoose.Schema({
    ownerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    groupName: {
        type: String,
        required: true,
    },
    groupCustom: {
        groupColor: {
            type: String,
            required: true,
            default: "white",
        },
        groupPicture: {
            type: String,
            required: true,
            default: "panda",
        }
    },
    isPrivate: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('Group', groupSchema);
