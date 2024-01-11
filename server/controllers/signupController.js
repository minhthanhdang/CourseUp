const jwt = require('jsonwebtoken');
require('dotenv').config();
const pool = require("../db")

const bcrypt = require('bcrypt')

const handleSignup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const text = 'INSERT INTO Users(username, email, password) VALUES ($1, $2, $3)'
    const values = [req.body.username, req.body.email, hashedPassword]

    await pool.query(text, values)
    res.status(201).send('Sign up successfully')
    console.log("signup success")
  } catch {
    res.status(500).send('Cannot sign up')
  }
}

module.exports = {handleSignup}
