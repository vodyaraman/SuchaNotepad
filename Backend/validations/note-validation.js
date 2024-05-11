import { body } from 'express-validator';

export const noteCreatingRules = [
    body('noteType')
        .isNumeric(),

    body('title')
        .isString()
        .isLength({min: 3})
        .withMessage('Длина заголовка должна быть не меньше 3-х символов.'),
    
    body('noteText')
        .isString()
        .isLength({min: 1})
        .withMessage('Длина заметки должна иметь хотя бы 1 символ'),

    body('additionalParams')
        .isArray()
        .optional()
]