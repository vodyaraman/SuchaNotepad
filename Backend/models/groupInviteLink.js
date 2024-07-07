import mongoose from '../mongoDB.js';

const inviteSchema = new mongoose.Schema({
    linkId:{
        type: String,
        required: true,
    },

    groupId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true,
    },

    createdAt: {
        type: Date,
        required: true,
    },
});

export default mongoose.model('Invite', inviteSchema);