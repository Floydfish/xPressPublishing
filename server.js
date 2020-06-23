const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// The port the server is listening on
const port = process.env.PORT || 4000;

// Using the body-parser JSON errorhandler
app.use(bodyParser.json());

// Using CORS middleware
app.use(cors());

// Starting the server
app.get('/', (req, res) => res.send("Starting the server"));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});

module.exports = app;