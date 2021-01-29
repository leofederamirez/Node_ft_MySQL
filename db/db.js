require('dotenv').config()
var mysql = require('mysql')
var db =  mysql.createConnection({
    host: process.env.host,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database
})
module.exports = db

