import express from 'express';
import {
    createGroup,
    addUserToGroup,
    getGroupDetails,
    listGroups,
} from '../controllers/Group/groupController.js';

const router = express.Router();

router.post('/create', createGroup);
router.post('/addUser', addUserToGroup);
router.get('/:groupId', getGroupDetails);
router.get('/', listGroups);

export default router;
