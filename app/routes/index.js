const express = require('express');

const userRoutes = require('./users');
const questionsRoutes = require('./questions');

const routes = express.Router();

routes.use('/questions', questionsRoutes);
routes.use('/users', userRoutes);

module.exports = routes;