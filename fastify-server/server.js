const fastify = require('fastify')({ logger: true });
const PORT = 5000;

fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/api/docs',
  swagger: {
    info: { title: 'fastify-example-api' },
  },
});
fastify.register(require('./routes/users'));

const startServer = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

startServer();
