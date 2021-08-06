const users = require('../data');

const User = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};

const usersOptions = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: User,
      },
    },
  },
};

const userOptions = {
  schema: {
    response: {
      200: User,
    },
  },
};

async function userRoutes(fastify, options) {
  fastify.get('/users', usersOptions, (req, reply) => {
    reply.send(users);
  });

  fastify.get('/users/:id', userOptions, (req, reply) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === Number(id));
    reply.send(user);
  });
}

module.exports = userRoutes;
