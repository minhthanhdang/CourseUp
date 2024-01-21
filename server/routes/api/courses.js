const express = require('express')
const router = express.Router()

const pool = require("../../db")
const verifyAccessToken = require('../../middleware/verifyAccessToken')

router.get('/all', verifyAccessToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Courses')
    res.json(result.rows)
  } catch {

  }
})

router.get('/user', verifyAccessToken, async (req, res) => {
  const userId = req.userId
  try {
    const courses = await pool.query('SELECT * FROM (SELECT courseId FROM Enrolment WHERE userId = $1), Courses WHERE courseId = id;', [userId])
    res.json(courses.rows)
  } catch (err) {
    res.status(403)
  }
})
module.exports = router
