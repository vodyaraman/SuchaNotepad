import { body } from 'express-validator';

export const noteCreatingRules = [
    body('noteType').isNumeric().withMessage('Note type must be a number'),
    body('title').notEmpty().withMessage('Title is required'),
    body('noteText').notEmpty().withMessage('Note text is required'),
];
