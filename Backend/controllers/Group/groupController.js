import Group from '../../models/group.js';
import GroupMember from '../../models/groupMember.js';

import { generateInviteLink } from '../../utils/generateInviteLink.js';

export const createGroup = async (req, res) => {
    try {
        const {groupName} = req.body
        const ownerId = req.userId
        console.log(groupName, ownerId)

        const group = new Group({
            ownerId,
            groupName,
        });

        await group.save();

        await generateInviteLink(group._id)
        
        res.status(201).json({status: 'success', message:['Успешное создание группы']});

    } catch (error) {
        console.log(error)
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
    const userId = req.params.userId; // Предполагаем, что userId передается как параметр URL

    try {
        // Найти все группы, где пользователь является участником
        const memberGroups = await GroupMember.find({ userId }).populate('groupId');
        const memberGroupIds = memberGroups.map(member => member.groupId._id);

        // Найти все группы, где пользователь является владельцем
        const ownerGroups = await Group.find({ ownerId: userId });

        // Объединить и удалить дубликаты
        const allGroupIds = [...new Set([...memberGroupIds, ...ownerGroups.map(group => group._id)])];
        
        // Извлечь все уникальные группы
        const groups = await Group.find({ _id: { $in: allGroupIds }}).populate('ownerId');

        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Controller to check groupName Validation 
// Паша, удали проверку на уникальность групп!!!
export const checkGroupName = async (req, res) => {
    try {  
        const { groupName } = req.query
        const existingGroup = await Group.findOne({groupName});

        if (existingGroup) {
            return res.status(400).json({status: false, message: ['This group already exists!']})
        }
        res.json({status: true})

    } catch (error) {
        console.error('Error in checking group:', error);
        res.status(500).json({ message: ['Error checking user'], error: error.message });
    }
}