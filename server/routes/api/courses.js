const express = require("express");
const router = express.Router();

const pool = require("../../db");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router.get("/all", verifyAccessToken, async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM Courses");
    res.json(result.rows);
  } catch {}
});

router.get("/user", verifyAccessToken, async (req, res) => {
  const userId = req.userId;
  try {
    const courses = await pool.query(
      "SELECT * FROM (SELECT courseId FROM Enrollment WHERE userId = $1), Courses WHERE courseId = id;",
      [userId]
    );
    res.json(courses.rows);
  } catch (err) {
    res.status(403);
  }
});

router.get("/enrolled", verifyAccessToken, async (req, res) => {
  const userId = req.userId;
  const coursesQuery =
    "SELECT * FROM (SELECT courseId FROM Enrollment WHERE userId = $1), Courses WHERE courseId = id;";
  try {
    const courses = await pool.query(coursesQuery, [userId]);
    res.json(courses.rows);
  } catch (err) {
    res.status(403);
  }
});

router.get("/suggestion", verifyAccessToken, async (req, res) => {
  const userId = req.userId;
  const coursesQuery =
    "SELECT * FROM Courses WHERE NOT id IN (SELECT id FROM (SELECT courseId FROM Enrollment WHERE userId = $1), Courses WHERE courseId = id);";
  try {
    const courses = await pool.query(coursesQuery, [userId]);
    res.json(courses.rows);
  } catch (err) {
    res.status(403);
  }
});

router.get("/course/:id", verifyAccessToken, async (req, res) => {
  const courseId = parseInt(req.params.id, 10);
  const userId = req.userId;
  let result = {};
  const query1 =
    "SELECT name, imgLink, description FROM Courses WHERE id = $1;";
  const query2 =
    "SELECT Users.username, Users.avatarLink FROM Users JOIN Administration ON Users.id = Administration.userId WHERE Administration.courseId = $1;";
  const query3 =
    "SELECT COUNT(*) AS totalStudent FROM Enrollment WHERE courseId = $1";
  const query4 =
    "SELECT COUNT(*) FROM enrollment WHERE userId = $1 AND courseId = $2";

  try {
    const course = await pool.query(query1, [courseId]);
    if (course.rows.length == 0) {
      res.status(204);
    } else {
      result.courseId = courseId[0];
      result.courseName = course.rows[0].name;
      result.imgLink = course.rows[0].imglink;
      result.description = course.rows[0].description;
    }
    const admin = await pool.query(query2, [courseId]);
    if (admin.rows.length != 0) {
      result.adminUsername = admin.rows[0].username;
      result.adminAvatarLink = admin.rows[0].avatarlink;
    }
    const totalStudent = await pool.query(query3, [courseId]);
    if (totalStudent.rows.length != 0) {
      result.studentCount = totalStudent.rows[0].totalstudent;
    }

    const isEnrolled = await pool.query(query4, [userId, courseId]);
    result.isEnrolled = result.rows[0].count > 0;
    res.json(result);
  } catch {
    res.status(404);
  }
});

module.exports = router;
