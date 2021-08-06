const {
  getAllUsers,
  getSingleUser,
  addSingleUser,
  deleteSingleUser,
  updateSingleUser,
} = require('../controller/users');

const User = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};

const getAllUsersOptions = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: User,
      },
    },
  },
  handler: getAllUsers,
};

const getSingleUserOptions = {
  schema: {
    response: {
      200: User,
    },
  },
  handler: getSingleUser,
};

const addSingleUserOptions = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
    response: {
      201: User,
    },
  },
  handler: addSingleUser,
};

const deleteSingleUserOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: deleteSingleUser,
};

const updateSingleUserOptions = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
    response: {
      201: User,
    },
  },
  handler: updateSingleUser,
};

async function userRoutes(fastify, options) {
  // Get All Users
  fastify.get('/users', getAllUsersOptions);

  // Get Single User
  fastify.get('/users/:id', getSingleUserOptions);

  // Add Single User
  fastify.post('/users/', addSingleUserOptions);

  // Delete Single User
  fastify.delete('/users/:id', deleteSingleUserOptions);

  // Update Single User
  fastify.put('/users/:id', updateSingleUserOptions);
}

module.exports = userRoutes;
