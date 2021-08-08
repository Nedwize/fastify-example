# Fastify VS Express

> Performance testing REST APIs built with Fastify and Express

# About

Repo contains two identical servers (Built with Fastify and Express) with the same business logic and endpoints.

Endpoints -

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/users`     | Get all Users           |
| GET    | `/users/:id` | Get single User with ID |
| POST   | `/users`     | Create a new User       |
| DELETE | `/users/:id` | Delete User             |
| UPDATE | `/users/:id` | Update User             |

# Getting Started

Run `npm install` in root as well as both the sub directories

Run this command inside both the directories `fastify-server` and `express-server`;

```bash
npm run start
```

This will start both the servers.

Default PORTS -

- 5000 - Fastify
- 8000 - Express

For testing - Run this command from the root

```bash
node loadtest.js
```

For further research you can tweak the options in `loadtest.js`

- `concurrency` - change the number of connections to increase or decrease the load on the server
- `maxSeconds` - change the test duration

# Results

Testing `GET /users/:id` for 30 seconds with 100 concurrency

| Framework | Req/Sec | Total Requests | Mean Latency (ms) | Total Errors |
| --------- | ------- | -------------- | ----------------- | ------------ |
| Express   | 2502    | 75441          | 39.6              | 0            |
| Fastify   | 4325    | 129993         | 23                | 0            |
