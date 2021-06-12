var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mysql',
    database: 'educational',
    debug: true
});

connection.connect();

exports.connection = connection;
