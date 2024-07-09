import NoteModel from '../models/note.js';
import NoteAccess from '../models/noteAccess.js';
import GroupMember from '../models/groupMember.js';

export const checkNoteOwnership = async (noteId, userId) => {
    const note = await NoteModel.findById(noteId);
    if (!note) {
        throw new Error('Note not found');
    }
    if (note.ownerId.toString() !== userId) {
        throw new Error('User does not have permission to perform this action on the note');
    }
    return note;
};

export const checkNoteAccess = async (noteId, userId) => {
    const userGroups = await GroupMember.find({ userId }).select('groupId');
    const hasAccess = await NoteAccess.findOne({ noteId, groupId: { $in: userGroups.map(group => group.groupId) } });
    return !!hasAccess;
};

export const getUserGroups = async (userId) => {
    return await GroupMember.find({ userId }).select('groupId');
};

