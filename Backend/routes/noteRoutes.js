import express from 'express';
import checkAuth from '../utils/checkAuth.js';
import { create} from '../controllers/Note/noteController.js';
import { noteCreatingRules } from '../validations/note-validation.js';

const router = express.Router();
router.post('/createNote', checkAuth, noteCreatingRules, create);

export default router;
