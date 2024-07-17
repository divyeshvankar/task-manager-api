// src/controllers/taskController.js
const {Task }= require('../../models');

  // Create a new task
exports.createTask = async (req, res) => {
  try {
    const userId = req.user.id; // Ensure req.user is set by authentication middleware
    console.log(userId);
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      dueDate: req.body.dueDate,
      UserId: userId, // Set the UserId from the authenticated user
    });

    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `An error occurred while creating the task: ${error.message}` });
  }
};

// Get all tasks for the authenticated user
exports.getAllTasks = async (req, res) => {
  try {
    const userId = req.user.id; // Ensure req.user is set by authentication middleware
    const tasks = await Task.findAll({ where: { UserId: userId } });
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `An error occurred while fetching tasks: ${error.message}` });
  }
};
// Get all tasks for the authenticated user Using Paginantion
exports.getAllTasks = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;
  try {
      const tasks = await Task.findAndCountAll({ limit, offset });
      res.status(200).json({
          totalItems: tasks.count,
          totalPages: Math.ceil(tasks.count / limit),
          currentPage: page,
          data: tasks.rows,
      });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

// Get all tasks for the authenticated user using filter
exports.getAllTasks = async (req, res) => {
  const { page = 1, limit = 10, title, status, dueDate } = req.query;
  const offset = (page - 1) * limit;
  const where = {};
  if (title) where.title = { [Op.like]: `%${title}%` };
  if (status) where.status = status;
  if (dueDate) where.dueDate = dueDate;
  try {
      const tasks = await Task.findAndCountAll({ where, limit, offset });
      res.status(200).json({
          totalItems: tasks.count,
          totalPages: Math.ceil(tasks.count / limit),
          currentPage: page,
          data: tasks.rows,
      });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};


// Get task By id
exports.getTask = async (req, res) => {
  try {
      const task = await Task.findByPk(req.params.id);

      if (!task) {
          return res.status(404).json({ error: 'Task not found.' });
      }

      // Check if the task belongs to the authenticated user
      if (task.UserId !== req.user.id) {
          return res.status(403).json({ error: 'Access denied. You do not have permission to access this task.' });
      }

      res.json(task);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching the task.' });
  }
};


exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { title, description, status, dueDate } = req.body;
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        await task.update({ title, description, status, dueDate });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        await task.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


