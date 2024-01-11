const pool = require("../db")

const handleLogout = async (req, res) => {

  const cookies = req.cookies;
  if (!cookies?.refreshToken) return res.sendStatus(204);

  const refreshToken = cookies.refreshToken;

  pool.query('SELECT id, refreshToken FROM Users WHERE refreshToken = $1', [refreshToken], (err, result) => {
    if (err) {
      return res.sendStatus(500)
    } else {
      console.log(result.rows)
      if (result.rows.length > 0) {
        const foundUser = result.rows[0]
        const deleteRefreshTokenQuery = "UPDATE Users SET refreshToken = '' WHERE id = $1;"
        const deleteRefreshTokenParams = [foundUser.id]
        pool.query(deleteRefreshTokenQuery, deleteRefreshTokenParams, (err, result) => {
          if (err) {
            return res.status(500);
          } else {
            // CLEAR COOKIE
            res.clearCookie('refreshToken', { httpOnly: true, maxAge: 24*60*60*1000 })
            res.sendStatus(204)
          }
        })
      }
      else {
        res.clearCookie('refreshToken', { httpOnly: true, maxAge: 24*60*60*1000 })
        res.sendStatus(204)
      }
    }
  })
}

module.exports = { handleLogout }
