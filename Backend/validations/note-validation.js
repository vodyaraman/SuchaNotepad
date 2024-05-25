import { body } from 'express-validator';

export const noteCreatingRules = [
    body('noteType').isNumeric().withMessage('Note type must be a number'),
    body('title').notEmpty().withMessage('Title is required'),
    body('noteText').notEmpty().withMessage('Note text is required'),
    body('timestamp.dateStart').optional().isISO8601().withMessage('Invalid start date'),
    body('timestamp.dateEnd').optional().isISO8601().withMessage('Invalid end date'),
];
