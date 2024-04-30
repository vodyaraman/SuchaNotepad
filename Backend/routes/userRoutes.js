import express from 'express';
import User from '../models/user.js';
import passport from 'passport';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Проверка, существует ли пользователь с таким же email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    // Создание нового пользователя
    const newUser = new User({
      name,
      email,
      password,
    });

    // Сохранение пользователя
    await newUser.save();

    // Создание JWT с информацией о пользователе
    const token = jwt.sign({ id: newUser._id, email: newUser.email }, secretKey, {
        expiresIn: '1h', // Время действия токена
      });

    res.status(200).json({ message: 'User registered successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Маршрут для входа пользователя
router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  res.status(200).json({ message: 'Login successful', user: req.user });
});

export default router;
