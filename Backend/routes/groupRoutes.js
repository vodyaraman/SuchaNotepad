import express from 'express';
import {
    createGroup,
    addUserToGroup,
    getGroupDetails,
    listGroups,
    checkGroupName,
} from '../controllers/Group/groupController.js';

import checkAuth from '../utils/checkAuth.js';

const router = express.Router();

router.get('/checkGroupName', checkGroupName)

router.post('/create', checkAuth, createGroup);
router.post('/addUser', addUserToGroup);
router.get('/:groupId', getGroupDetails);
router.get('/', listGroups);

export default router;
