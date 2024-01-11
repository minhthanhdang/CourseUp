const express = require('express')
const router = express.Router()

const pool = require("../../db")

router.get('/', async (req, res) => {
  try {
    const email = 'thanh@gmail'

    const userIdResult = await pool.query('SELECT id FROM Users WHERE email = $1;', [email])
    const userId = userIdResult.rows[0].id
    console.log(userId)

    const tasksQuery = 'SELECT * FROM (SELECT * FROM TaskParticipation WHERE userId = $1 ORDER BY priority ASC), Tasks WHERE taskId = id;'
    const tasksQueryValues = [userId]
    const tasks = await pool.query(tasksQuery, tasksQueryValues)
    console.log(tasks.rows)

    const eventsQuery = 'SELECT * FROM EventParticipation WHERE userId = $1 ORDER BY priority ASC;'
    const eventsQueryValues = [userId]
    const events = await pool.query(eventsQuery, eventsQueryValues)

    let completed = []
    let notStarted = []
    let inProgress = []

    console.log(events.rows[0])
    events.rows.map((event) => {
      if (event.status == 'completed') completed.push(event)
      else if (event.status == 'notStarted') notStarted.push(event)
      else if (event.status == 'inProgress') inProgress.push(event)
    })

    tasks.rows.map((task) => {
      if (task.status == 'completed') completed.push(task)
      else if (task.status == 'notStarted') notStarted.push(task)
      else if (task.status == 'inProgress') inProgress.push(task)
    })

    res.json({
      inProgress: inProgress,
      notStarted: notStarted,
      completed: completed
    })
  } catch (err) {
    console.log(err.message)
  }
})


router.get('/task', async (req, res) => {
  const tasksQuery = 'SELECT * FROM (SELECT * FROM TaskParticipation WHERE userId = $1 ORDER BY priority ASC), Tasks WHERE taskId = id;'
  const tasksQueryValues = [1]
  const tasks = await pool.query(tasksQuery, tasksQueryValues)
  res.json(tasks.rows)
})
module.exports = router
