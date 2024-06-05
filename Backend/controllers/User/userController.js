import User from '../../models/user.js';
import { generateToken } from '../../utils/JWT.js';

export const register = async (req, res) => {
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
};

export const login = (req, res) => {
  res.status(200).json({ message: 'Login successful', user: req.user });
};

export const check = async (req, res) => {
  try {
    const { name } = req.query;
    console.log(name);
    
    const existingName = await User.findOne({ name });

    console.log(existingName);

    if (existingName) {
      return res.json({ status: false });
    }

    res.json({
      status: true
    });
  } catch (error) {
    console.error('Error in checking user:', error);
    res.status(500).json({ message: 'Error checking user', error: error.message });
  }
};

export const debugSentry = (req, res) => {
  throw new Error("My first Sentry error!");
};
