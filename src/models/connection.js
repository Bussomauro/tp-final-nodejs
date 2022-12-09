const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DBPASS,
    database: process.env.DB
});

connection.connect();
module.exports = connection;
