import MySql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = MySql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
});

const db = connection.promise();

export default db;
