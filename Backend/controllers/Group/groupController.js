import Group from '../../models/group.js';
import GroupMember from '../../models/groupMember.js';

// Controller to create a new group
export const createGroup = async (req, res) => {
    const { ownerID, groupName, groupColor, groupPicture, isPrivate } = req.body;

    try {
        const group = new Group({
            ownerID,
            groupName,
            groupCustom: { groupColor, groupPicture },
            isPrivate,
        });
        await group.save();
        res.status(201).json(group);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to add a user to a group
export const addUserToGroup = async (req, res) => {
    const { userId, groupId } = req.body;

    try {
        const groupMember = new GroupMember({ userId, groupId });
        await groupMember.save();
        res.status(201).json(groupMember);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get details of a specific group
export const getGroupDetails = async (req, res) => {
    const { groupId } = req.params;

    try {
        const group = await Group.findById(groupId).populate('ownerID', 'name email');
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }

        const members = await GroupMember.find({ groupId }).populate('userId', 'name email');
        res.status(200).json({ group, members });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to list all groups
export const listGroups = async (req, res) => {
    try {
        const groups = await Group.find().populate('ownerID', 'name email');
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
