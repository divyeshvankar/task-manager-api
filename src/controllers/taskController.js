// src/controllers/taskController.js
const {Task }= require('../../models');

exports.createTask = async (req, res) => {
    const { title, description, status, dueDate } = req.body;
    const { userId } = req.user; // Assuming userId is set in req.user after authentication
  
    try {
      const newTask = await Task.create({
        title,
        description,
        status,
        dueDate,
        UserId: userId, // Associate the task with the authenticated user
      });
  
      res.status(201).json(newTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `An error occurred while creating the task.${error}` });
    }
  };
exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.findAll({ where: { userId: req.user.id } });
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `An error occurred while fetching tasks.${error}` });
    }
  };
  
  exports.getTask = async (req, res) => {
    try {
      const task = await Task.findByPk(req.params.id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found.' });
      }
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching the task.' });
    }
  };
// exports.getAllTasks = async (req, res) => {
//     try {
//         const tasks = await Task.findAll();
//         res.status(200).json(tasks);
//     }  catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//       }
// };
// *******Extra feature : Implement Pagination:
// exports.getAllTasks = async (req, res) => {
//     const { page = 1, limit = 10 } = req.query;
//     const offset = (page - 1) * limit;
//     try {
//         const tasks = await Task.findAndCountAll({ limit, offset });
//         res.status(200).json({
//             totalItems: tasks.count,
//             totalPages: Math.ceil(tasks.count / limit),
//             currentPage: page,
//             data: tasks.rows,
//         });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };


// *******Extra feature : Implement Search/Filter:
// exports.getAllTasks = async (req, res) => {
//     const { page = 1, limit = 10, title, status, dueDate } = req.query;
//     const offset = (page - 1) * limit;
//     const where = {};
//     if (title) where.title = { [Op.like]: `%${title}%` };
//     if (status) where.status = status;
//     if (dueDate) where.dueDate = dueDate;
//     try {
//         const tasks = await Task.findAndCountAll({ where, limit, offset });
//         res.status(200).json({
//             totalItems: tasks.count,
//             totalPages: Math.ceil(tasks.count / limit),
//             currentPage: page,
//             data: tasks.rows,
//         });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };


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


