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

router.get('/enrolled', verifyAccessToken, async(req, res) => {
  const userId = req.userId
  const coursesQuery = 'SELECT * FROM (SELECT courseId FROM Enrolment WHERE userId = $1), Courses WHERE courseId = id;'
  try {
    const courses = await pool.query(coursesQuery, [userId])
    console.log(courses.rows)
    res.json(courses.rows)
  } catch (err) {
    res.status(403)
  }
})

router.get('/suggestion', verifyAccessToken, async(req, res) => {
  const userId = req.userId
  const coursesQuery = 'SELECT * FROM Courses WHERE NOT id IN (SELECT id FROM (SELECT courseId FROM Enrolment WHERE userId = $1), Courses WHERE courseId = id);'
  try {
    const courses = await pool.query(coursesQuery, [userId])
    console.log(courses.rows)
    res.json(courses.rows)
  } catch (err) {
    res.status(403)
  }
})


router.get('/course/:id', verifyAccessToken, async (req, res) => {
  const courseId = req.params.id
  let result = {}
  const query1 = 'SELECT name, categoryId, imgLink FROM Courses WHERE id = $1'
  const query2 = 'SELECT Users.username, Users.avatarLink FROM Users JOIN Administration ON Users.id = Administration.userId WHERE Administration.courseId = $1;'
  const query3 = 'SELECT COUNT(*) AS totalEnrolledUsers FROM Enrolment WHERE courseId = $1'
  try {
    const course = await pool.query(query1, courseId)
    if (course.rows.length == 0) {
      res.status(204)
    } else {
      result.course = course.rows[0]
    }
    const admin = await pool.query(query2, courseId)
    if (admin.rows.length != 0) {
      result.admin = course.rows[0]
    }
    const totalStudent = await pool.query(query3, courseId)
    if (totalStudent.rows.length != 0) {
      result.studentCount = course.rows[0].totalEnrolledUsers
    }

    res.json(result)
  } catch {
    res.status(404)
  }
})

module.exports = router
