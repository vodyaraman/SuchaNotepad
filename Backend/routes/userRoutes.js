import express from 'express';
import passport from 'passport';
import { register, login, checkUser, debugSentry, checkEmail, validateUserData } from '../controllers/User/userController.js';
import { userRegistrationRules } from '../validations/auth.js';

const router = express.Router();

router.get('/checkUser', checkUser);
router.get('/checkEmail', checkEmail);
router.post('/register', register);
router.post('/validateUserData', userRegistrationRules, validateUserData);
router.post('/login', passport.authenticate('local', { session: false }), login);
router.get('/debug-sentry', debugSentry);

export default router;

