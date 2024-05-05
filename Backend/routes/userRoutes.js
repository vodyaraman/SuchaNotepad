import express from 'express';
import User from '../models/user.js';
import passport from 'passport';
import { generateToken } from '../utils/JWT.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    const token = generateToken(newUser);
    console.log('Sending token:', token);

    res.status(201).json({
      message: 'User registered successfully',
      token,
    });
  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

// Маршрут для входа пользователя
router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  res.status(200).json({ message: 'Login successful', user: req.user });
});

export default router;
