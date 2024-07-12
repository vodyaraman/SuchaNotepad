import express from 'express';
import {
    createGroup,
    addUserToGroup,
    getGroupDetails,
    listGroups,
    inviteToGroup
} from '../controllers/Group/groupController.js';

import checkAuth from '../utils/checkAuth.js';

const router = express.Router();

router.post('/create', checkAuth, createGroup);
router.post('/addUser', checkAuth, addUserToGroup);
router.get('/:groupId', checkAuth, getGroupDetails);
router.get('/:linkId', checkAuth, inviteToGroup )
router.get('/', checkAuth, listGroups);

export default router;

