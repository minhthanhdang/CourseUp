const pg = require ('pg')

require('dotenv').config()

const pool = new pg.Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT ? parseInt(process.env.PORT) : 5432
});

module.exports = pool

