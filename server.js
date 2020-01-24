const express = require('express');

// Routers...

const projectsRouter = require('./projects/projects-router');
const resourcesRouter = require('./resources/resource-router');
const tasksRouter = require('./tasks/tasks-router');

const server = express();

server.use(express.json());

// Router base URL endpoints...

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

module.exports = server;