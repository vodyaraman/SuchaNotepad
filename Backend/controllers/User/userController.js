import User from '../../models/user.js';
import { generateToken } from '../../utils/JWT.js';
import { generateActivateCode } from '../../utils/generateActivateCode.js';
import { validationResult } from 'express-validator';
import { sendEmailCode } from '../../utils/sendEmailCode.js';

let activateCode;

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body; 

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

export const validateUserData = async(req, res) => {
  try {
    
    const errors = validationResult(req)

    if(!errors.isEmpty()){
      return res.json(errors.array())
    }

    activateCode = generateActivateCode()
    const {email} = req.body

    sendEmailCode(email, activateCode)
    res.status(200).json({status: true, message: 'Проверка корректности данных прошла. Код успешно отправлен на почту!'})

  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Что-то пошло не так'})
  }
  
};

export const validateEmailCode = async (req, res) => {
  try {
    const {code} = req.body
    if (code === activateCode) {
      res.status(200).json(true)
    } else{
      return res.json(false)
    }
  } catch (error) {
    console.error('Error validating activate code:', error);
    res.status(500).json([{ message: 'Error validating activate code', error: error.message }]);
  }
};

export const login = (req, res) => {
    // В этой точке уже сработала стратегия local
    const user = req.user;

    const token = generateToken(user);

    console.log(token)
  
    res.status(200).json({ message: 'Login successful', token });
};

export const checkUser = async (req, res) => {
  try {
    const { name } = req.query;
    console.log(name);
    
    const existingName = await User.findOne({ name });

    console.log(existingName);

    if (existingName) {
      return res.json({ status: false, message: 'This user already exists!' });
    }

    res.json({
      status: true
    });
  } catch (error) {
    console.error('Error in checking user:', error);
    res.status(500).json({ message: 'Error checking user', error: error.message });
  }
};

export const checkEmail = async (req, res) => {
  try {
    const { email } = req.query;
    console.log(email);

    const existingEmail = await User.findOne({ email });

    console.log(existingEmail);

    if (existingEmail) {
      return res.json({ status: false, message: 'User with this email already exists!' });
    }

    res.json({
      status: true
    });

  } catch (error) {
    console.log(error.message)
  }
};

export const debugSentry = (req, res) => {
  throw new Error("My first Sentry error!");
};
