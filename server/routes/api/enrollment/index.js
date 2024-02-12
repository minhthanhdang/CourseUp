const express = require('express')
const router = express.Router()

const deleteEnrollment = require('./deleteEnrollment')
const createEnrollment = require('./createEnrollment')
const verifyAccessToken = require('../../../middleware/verifyAccessToken')

router.delete('/deleteEnrollment/:courseId', verifyAccessToken, deleteEnrollment);
router.post('/createEnrollment/:courseId', verifyAccessToken, createEnrollment);

module.exports = router
