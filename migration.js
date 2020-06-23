const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database');
});

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS `Artist`  ( ' +
        '`id`  INTEGER PRIMARY KEY, ' +
        '`name` TEXT NOT NULL,' +
        '`date_of_birth` TEXT NOT NULL,' +
        '`biography` TEXT NOT NULL,' +
        '`is_currently_employed` INTEGER NOT NULL DEFAULT 1 )'
    )  
});

db.close((err) => {
    if (err) {
        return console.log(err.message);
    }
    console.log('Closed the database connection')
});

module.exports = db;