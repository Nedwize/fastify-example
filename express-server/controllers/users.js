let users = require('../data');
const { v4 } = require('uuid');

const getAllUsers = (req, res) => {
  res.json(users);
};

const getSingleUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  res.json(user);
};

const addSingleUser = (req, res) => {
  const { name } = req.body;
  const user = {
    id: v4(),
    name,
  };
  users.push(user);
  res.status(201).json(user);
};

const deleteSingleUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((item) => item.id !== Number(id));
  res.json({ message: 'User deleted' });
};

const updateSingleUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  users = users.map((item) => (item.id === Number(id) ? { id, name } : item));
  res.json({ id, name });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  addSingleUser,
  deleteSingleUser,
  updateSingleUser,
};
