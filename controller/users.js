let users = require('../data');
const { v4 } = require('uuid');

const getAllUsers = (req, reply) => {
  reply.send(users);
};

const getSingleUser = (req, reply) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  reply.send(user);
};

const addSingleUser = (req, reply) => {
  const { name } = req.body;
  const user = {
    id: v4(),
    name,
  };
  users.push(user);
  reply.code(201).send(user);
};

const deleteSingleUser = (req, reply) => {
  const { id } = req.params;
  users = users.filter((item) => item.id !== Number(id));
  reply.send({ message: 'User deleted' });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  addSingleUser,
  deleteSingleUser,
};
