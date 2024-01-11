const jwt = require('jsonwebtoken');
require('dotenv').config();
const pool = require("../db")

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.refreshToken) return res.sendStatus(401);
  const refreshToken = cookies.refreshToken;

  pool.query('SELECT id, refreshToken FROM Users WHERE refreshToken = $1', [refreshToken], (err, result) => {
    if (err) {
      return res.sendStatus(403)
    } else {
      console.log(result.rows)
      if (result.rows.length > 0) {
        console.log("refrsh okeay")
        const foundUser = result.rows[0]
        jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET,
          (err, decoded) => {
              if (err || foundUser.id !== decoded.userId) return res.sendStatus(403);
              const accessToken = jwt.sign(
                  { userId: decoded.userId, email: decoded.email },
                  process.env.ACCESS_TOKEN_SECRET,
                  { expiresIn: '30s' }
              );
              res.json({ userId: decoded.userId, accessToken: accessToken })
          }
      );
      }
      else res.sendStatus(403)

    }
  })


}

module.exports = { handleRefreshToken }
