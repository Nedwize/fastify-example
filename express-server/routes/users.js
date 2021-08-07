const express = require('express');
const Router = express.Router();

const {
  getAllUsers,
  getSingleUser,
  addSingleUser,
  deleteSingleUser,
  updateSingleUser,
} = require('../controllers/users.js');

Router.get('/users', getAllUsers)
  .get('/users/:id', getSingleUser)
  .post('/users', addSingleUser)
  .delete('/users/:id', deleteSingleUser)
  .put('/users/:id', updateSingleUser);

module.exports = Router;
