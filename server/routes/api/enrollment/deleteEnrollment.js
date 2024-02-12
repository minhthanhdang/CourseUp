const express = require('express')
const router = express.Router()

const pool = require("../../../db")
const verifyAccessToken = require('../../../middleware/verifyAccessToken')

/*
router.post('/unenroll', verifyAccessToken, async (req, res) => {
  if (!req.body.courseId) res.status(404).send('Not found')

  const userId = req.userId

  await pool.query('DELETE FROM Enrollment WHERE userId = $1 AND courseId = $2;', [userId, req.body.courseId], (error, result) => {
    if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error.' });
    }

    if (result.rowCount === 0) {
        res.status(404).json({ message: 'Row not found.' });
    } else {
        res.status(200).json({ message: 'Row deleted successfully.' });
    }
  })
})
*/

const deleteEnrollment = async (req, res) => {

  if (!req.params.courseId) return res.status(400).send('course doesnt exists')

  const userId = req.userId
  const courseId = req.params.courseId

  pool.query('DELETE FROM Enrollment WHERE userId = $1 AND courseId = $2;', [userId, courseId], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error.' });
    }

    if (result.rowCount === 0) {
      res.status(404).json({ message: 'Row not found.' });
    } else {
      res.status(200).json({ message: 'Row deleted successfully.' });
    }
  })
}

module.exports = deleteEnrollment
