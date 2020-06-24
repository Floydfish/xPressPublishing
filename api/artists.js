const express = require('express');
const artistsRouter = express.Router();

const sqlite3 = require('sqlite3');

let db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database');
});

artistsRouter.get('/', (req, res, next) => {
    db.all('SELECT * FROM Astist WHERE Artist.is_currently_employed = 1', 
        (err, artists) => {
            if (err) {
                next(err);
            } else {
                res.status(200).json({artists: artists});
            }
        });
});

module.exports = artistsRouter;