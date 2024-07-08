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

router.get('/checkGroupName', checkGroupName);

/*Добавлен маршрут router.get('/user/:userId', checkAuth, listGroups); для получения групп по идентификатору пользователя.
Добавлен middleware checkAuth для маршрутов, которые требуют аутентификации.*/

router.post('/create', checkAuth, createGroup);
router.post('/addUser', checkAuth, addUserToGroup);
router.get('/:groupId', checkAuth, getGroupDetails);
router.get('/user/:userId', checkAuth, listGroups);

export default router;

