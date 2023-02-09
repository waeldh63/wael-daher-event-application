var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'eventapp',
    user: 'root',
    password: 'password'
});

module.exports = connection;