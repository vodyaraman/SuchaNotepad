import { body } from 'express-validator';

// Правила валидации для регистрации
export const userRegistrationRules = [
  body('name')
    .isString()
    .withMessage('Name must be a string')
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters long'),
  
  body('email')
    .isEmail()
    .withMessage('Invalid email format'),
  
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];

// Правила валидации для входа в систему
export const userLoginRules = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];
