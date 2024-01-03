require('dotenv').config()

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const cors = require('cors')
const cookieParser = require('cookie-parser')
const pool = require("./db")

app.use(cors())
app.use(cookieParser())
app.use(express.json())


/////////////////////// SIGN UP //////////////////////////
app.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const text = 'INSERT INTO User(username, email, password, company) VALUES ($1, $2, $3, $4)'
    const values = [req.body.username, req.body.email, hashedPassword, req.body.company]

    await pool.query(text, values)
    res.status(201).send('Sign up successfully')
  } catch {
    res.status(500).send('Cannot sign up')
  }
})


/////////////////////// LOG IN //////////////////////////
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s'})
}

app.post('/login', async (req, res) => {
  try {
    // CHECK USERNAME IN DATABASE
    const text = 'SELECT * FROM User WHERE username = $1'
    const values = [req.body.username]
    const username = req.body.username

    const user = { name: username }

    const result = await pool.query(text, values)

    if (result.rows.length > 0) {
      // CHECK PASSWORD
      if (await bcrypt.compare(req.body.password, result.rows[0]["password"])) {
        // GIVE ACCESS TOKEN

        const accessToken = generateAccessToken(user)
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)

        res.json({ accessToken: accessToken, refreshToken: refreshToken })

      } else {

        res.send('Wrong password')

      }
    } else {
      return res.status(400).send('Cannot find user')
    }
  } catch {
    res.status(500).send()
  }
})


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
