const express = require('express')
const apiRouter = express.Router();
const artistsRouter = require('./artists.js');

apiRouter.use('/artist', artistsRouter); // check if it's artists or artist

module.exports = apiRouter;