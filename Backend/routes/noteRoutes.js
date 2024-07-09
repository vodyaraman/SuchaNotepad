import express from 'express';
import checkAuth from '../utils/checkAuth.js';
import { create, update, deleteNote, getNotes, getNoteById} from '../controllers/Note/noteController.js';
import { noteCreatingRules } from '../validations/note-validation.js';

const router = express.Router();
router.post('/createNote', checkAuth, noteCreatingRules, create);
router.put('/updateNote/:id', checkAuth, update);
router.delete('/deleteNote/:id', checkAuth, deleteNote);
router.get('/getNotes', checkAuth, getNotes);
router.get('/getNote/:id', checkAuth, getNoteById);

export default router;
