const jwt = require('jsonwebtoken');
require('dotenv').config();
const pool = require("../db")

const bcrypt = require('bcrypt')

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s'})
}

const handleLogin = async (req, res) => {
  if (!req.body.email || !req.body.password) return res.status(400).json({ 'message': 'Username and password are required.' });

  try {
    // CHECK USERNAME IN DATABASE
    const text = 'SELECT * FROM Users WHERE email = $1'
    const values = [req.body.email]

    const userResult = await pool.query(text, values)

    // CHECK LOGIN CREDENTIALS
    if (userResult.rows.length > 0) {
      // CHECK PASSWORD
      if (await bcrypt.compare(req.body.password, userResult.rows[0]["password"])) {

        // GENERATE ACCESS TOKEN
        const user = { userId: userResult.rows[0]["id"], email: userResult.rows[0]["email"] }
        const accessToken = generateAccessToken(user)
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)

        // ADD REFRESH TOKEN TO DB
        const addRefreshTokenQuery = "UPDATE Users SET refreshToken = $1 WHERE id = $2;"
        const addRefreshTokenParams = [refreshToken, userResult.rows[0]["id"]]
        pool.query(addRefreshTokenQuery, addRefreshTokenParams, (err, result) => {
          if (err) {
            return res.status(400).json({ 'message': 'Error verifying user' });
          } else {
            // SEND BACK THE TOKENS
            res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 24*60*60*1000})
            res.json({ userId: userResult.rows[0]["id"], accessToken: accessToken })
          }
        })
      } else {
        res.send('Wrong password')
      }
    } else {
      return res.status(400).send('Cannot find user')
    }
  } catch {
    res.status(500).send()
  }
}

module.exports = {handleLogin}
