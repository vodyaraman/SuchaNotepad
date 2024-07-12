import Group from '../../models/group.js';
import GroupMember from '../../models/groupMember.js';
import Invite from '../../models/groupInviteLink.js';

import { generateInviteLink } from '../../utils/generateInviteLink.js';
import { createNewGroupMember } from '../../utils/createNewGroupMember.js';

export const createGroup = async (req, res) => {
    try {
        const {groupName} = req.body
        const ownerId = req.userId
        const role = 'admin'

        const group = new Group({
            ownerId,
            groupName,
        });

        await group.save();

        await createNewGroupMember(group._id, ownerId, role)
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
        const members = await GroupMember.find({ groupId }).populate('userId', 'name');
        console.log(members)
        const link = await Invite.findOne({groupId})
        const invationLink = `http://${process.env.HOST}:${process.env.PORT}/${link.linkId}`
        console.log(invationLink)
        res.status(200).json({ members, invationLink });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to list all groups
export const listGroups = async (req, res) => {
    const userId = req.userId
    
    try {
        // Найти все группы, где пользователь является участником
        const memberGroups = await GroupMember.find({ userId }).populate('groupId');
        console.log(memberGroups)

        const memberGroupIds = memberGroups.map(member => member.groupId._id);

        // // Найти все группы, где пользователь является владельцем
        const ownerGroups = await Group.find({ ownerId: userId });
        console.log(ownerGroups)

        if(ownerGroups.length === 0 && memberGroups.length === 0){
            console.log('Групп нет')
            return res.status(404).json({status: false})
        }
        // Объединить и удалить дубликаты
        const allGroupIds = [...new Set([...memberGroupIds, ...ownerGroups.map(group => group._id)])];
        
        // Извлечь все уникальные группы
        const groups = await Group.find({ _id: { $in: allGroupIds }}).populate('ownerId');

        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};