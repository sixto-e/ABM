const util = require('util');
const mysql = require('mysql');

const pool = mysql.createPool({
    host:'localhost',
    port:3306,
    password:'',
    user:'root',
    database:'productos',
    connectionLimit:10
});

pool.query = util.promisify(pool.query);
module.exports = pool;