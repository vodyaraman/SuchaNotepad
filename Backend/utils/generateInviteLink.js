import { v4 as uuidv4 } from "uuid";
import Invite from "../models/groupInviteLink.js";


export const generateInviteLink = async (groupId) => {
    const linkId = uuidv4()

    const invite = new Invite({ linkId, groupId });
    await invite.save()

    return {status: 'success', message: ['Ссылка успешно создана!']}
}