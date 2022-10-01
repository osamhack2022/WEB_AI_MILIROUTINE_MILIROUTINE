const mysql = require('mysql');
const path = require('path');

require('dotenv').config({path:path.join(__dirname, '.env')});

const db = mysql.createConnection({
	host : process.env.DB_HOST,
	user : process.env.DB_USER,
	password : process.env.DB_PASSWORD,
	database : process.env.DB_DATABASE,
	port : '3000'
})

db.connect();

module.exports = db;