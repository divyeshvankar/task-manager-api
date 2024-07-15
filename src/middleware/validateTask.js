// src/middleware/validateTask.js
const { body, validationResult } = require('express-validator');

exports.validateTask = [
    body('title').notEmpty().withMessage('Title is required'),
    body('status').isIn(['pending', 'in-progress', 'completed']).withMessage('Invalid status'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
