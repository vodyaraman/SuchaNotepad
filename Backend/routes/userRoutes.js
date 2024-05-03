import express from 'express';
import User from '../models/user.js';
import passport from 'passport';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Логирование входных данных для диагностики
    console.log('Registering user:', name, email);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', email);
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();
    console.log('User registered:', newUser);

    // Дополнительно можно логировать успешное создание пользователя
    res.status(201).json({ message: 'User registered successfully', user: newUser });
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
