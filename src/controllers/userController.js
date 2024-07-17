// controllers/userController.js
require('dotenv').config();
const { User } = require('../../models');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user || !(await user.validPassword(password))) {
      throw new Error('Invalid login credentials');
    }
    console.log(process.env.JWT_SECRET)
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.log(process.env.JWT_SECRET)
    res.status(400).json({ error: error.message });
  }
};
