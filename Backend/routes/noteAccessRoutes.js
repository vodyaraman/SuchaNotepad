import express from 'express';
import {
    addNoteAccess,
    updateNoteAccess,
    removeNoteAccess,
    getNoteAccessDetails
} from '../controllers/Note/noteAccessController.js';

const router = express.Router();

router.post('/add', addNoteAccess);
router.put('/update', updateNoteAccess);
router.delete('/remove', removeNoteAccess);
router.get('/:noteId', getNoteAccessDetails);

export default router;
