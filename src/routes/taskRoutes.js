
// const express = require('express');
// const router = express.Router();
// const taskController = require('../controllers/taskController');
// const auth = require('../middleware/auth');
// const { validateTask } = require('../middleware/validateTask');

// router.post('/tasks', auth, validateTask, taskController.createTask);
// router.put('/tasks/:id', auth, validateTask, taskController.updateTask);
// router.get('/tasks', auth, taskController.getAllTasks);
// router.get('/tasks/:id', auth, taskController.getTaskById);
// router.delete('/tasks/:id', auth, taskController.deleteTask);

// // router.post('/tasks', taskController.createTask);
// // router.get('/tasks', taskController.getAllTasks);
// // router.get('/tasks/:id', taskController.getTaskById);
// // router.put('/tasks/:id', taskController.updateTask);
// // router.delete('/tasks/:id', taskController.deleteTask);

// module.exports = router;
// src/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const { createTask, getAllTasks, getTask, updateTask, deleteTask } = require('../controllers/taskController');
const authenticateJWT = require('../middleware/authMiddleware');

router.post('/tasks', authenticateJWT, createTask);
router.get('/tasks', authenticateJWT, getAllTasks);
router.get('/tasks/:id', authenticateJWT, getTask);
router.put('/tasks/:id', authenticateJWT, updateTask);
router.delete('/tasks/:id', authenticateJWT, deleteTask);

module.exports = router;
