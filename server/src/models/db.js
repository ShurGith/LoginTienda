const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fila',
    port: 33006,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

});

module.exports = connection;