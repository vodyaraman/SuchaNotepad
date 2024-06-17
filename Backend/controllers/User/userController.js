import User from '../../models/user.js';
import { generateToken } from '../../utils/JWT.js';
import { generateActivateCode } from '../../utils/generateActivateCode.js';
import { validationResult } from 'express-validator';

//Импорт библиотеки для отправки почты
import * as nodemailer from 'nodemailer'
let activateCode;

export const register = async (req, res) => {
  try {
    // const errors = validationResult(req)

    // if(!errors.isEmpty()){
    //   return res.json(errors.array())
    // }

    const { name, email, password } = req.body;

    // const existingUser = await User.findOne({ email });

    // if (existingUser) {
    //   return res.status(409).json({ message: 'User with this email already exists' });
    // } 

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

export const sendEmailCode = async (req, res) => {
    try {
      const {email} = req.body
      activateCode = generateActivateCode()
      //Инициализация и настройка почтового сервера
      const transporter = nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL, //Адрес отправителя
        to: email, //Адрес получателя
        subject: 'Активация почты для NotePad', //Заголовок письма
        html: `<b>Пожалуйста введите проверочный код в приложении:</b>
              <p>${activateCode}</p>`
      })

      res.status(200).json({status: true})

    } catch (error) {
      console.error('Error sending activate code:', error);
      res.status(500).json([{ message: 'Error sending activate code', error: error.message }]);
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
