import GroupMember from "../models/groupMember.js";


export const createNewGroupMember = async (groupId, userId, role='member') => {

    const groupMember = new GroupMember({ groupId, userId, role });
    await groupMember.save()

    return {status: 'success', message: ['Участник группы успешно добавлен!']}
}