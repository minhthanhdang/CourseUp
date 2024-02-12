const express = require("express");
const router = express.Router();

const pool = require("../../../db");
const verifyAccessToken = require("../../../middleware/verifyAccessToken");

router.post("/enroll", verifyAccessToken, async (req, res) => {
  if (!req.body.courseId) return res.status(404).send("Not found");

  const userId = req.userId;

  try {
    await pool.query(
      "INSERT INTO Enrollment (userId, courseId) VALUES ($1, $2);",
      [userId, req.body.courseId]
    );
    return res.status(201);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ error: "User already enrolled." });
    } else {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

const createEnrollment = async (req, res) => {
  if (!req.params.courseId) return res.status(400).send("course doesnt exists");

  const userId = req.userId;
  const courseId = req.params.courseId;

  try {
    await pool.query(
      "INSERT INTO Enrollment (userId, courseId) VALUES ($1, $2);",
      [userId, courseId]
    );
    res.status(201).send("Success");
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ error: "User already enrolled." });
    } else {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

module.exports = createEnrollment;
