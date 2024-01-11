require('dotenv').config()

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const cookieParser = require('cookie-parser')
const pool = require("./db")

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())

app.use('/signup', require('./routes/auth/signup'))
app.use('/login', require('./routes/auth/login'))
app.use('/courses', require('./routes/api/courses'))
app.use('/dashboard', require('./routes/api/dashboard'))
app.use('/refresh', require('./routes/refresh'))

/////////////////////// SIGN UP //////////////////////////
/*app.post('/signup', async (req, res) => {
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
})*/


/////////////////////// LOG IN //////////////////////////
/*function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s'})
}

app.post('/login', async (req, res) => {
  try {
    // CHECK USERNAME IN DATABASE
    const text = 'SELECT * FROM Users WHERE email = $1'
    const values = [req.body.email]

    const userResult = await pool.query(text, values)

    if (userResult.rows.length > 0) {
      // CHECK PASSWORD
      if (await bcrypt.compare(req.body.password, userResult.rows[0]["password"])) {

        // GENERATE ACCESS TOKEN
        const user = { userId: userResult.rows[0]["id"], email: userResult.rows[0]["email"] }
        const accessToken = generateAccessToken(user)
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)

        const addRefreshTokenQuery = "UPDATE Users SET refreshToken = $1 WHERE id = $2;"
        const addRefreshTokenParams = [refreshToken, userResult.rows[0]["id"]]
        pool.query(addRefreshTokenQuery, addRefreshTokenParams, (err, result) => {
          if (err) {

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
})*/

/////////////////////// REFRESH TOKEN //////////////////////////




/////////////////////// GET YOUR BLOGS //////////////////////////
app.get('/courses/my_courses', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Administration WHERE userID = (SELECT id FROM User WHERE username = $1);', [req.user])
    res.json(result.rows)
  } catch {

  }
})


app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM User')
    res.json(result.rows)
  } catch {

  }
})


app.post('/newblog', async (req, res) => {
  try {

  } catch {

  }
})



function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')
  if (token === null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}


app.listen(3000)
