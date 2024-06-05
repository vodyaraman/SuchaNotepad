import express from 'express';
import passport from 'passport';
import { register, login, check, debugSentry } from '../controllers/User/userController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', passport.authenticate('local', { session: false }), login);
router.get('/checkUser', check);
router.get('/debug-sentry', debugSentry);

export default router;

