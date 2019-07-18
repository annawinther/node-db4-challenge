const express = require('express');

const RecipesRouter = require('./recipes/recipes-model');

const server = express();

server.use(express.json());
server.use('/api/recipes/', RecipesRouter);

module.exports = server;