const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const morgan = require('morgan');

const apiRouter = require('./api/api');

const app = express();

// The port the server is listening on
const PORT = process.env.PORT || 4000;

// Using the body-parser JSON errorhandler
app.use(bodyParser.json());

// Using CORS security thing
app.use(cors());

// Using morgan to control the login
app.use(morgan('dev'))

// Using the API router
app.use('/api', apiRouter);

// Starting the server
app.get('/', (req, res) => res.send("Starting the server"));

app.use(errorHandler());

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

module.exports = app;