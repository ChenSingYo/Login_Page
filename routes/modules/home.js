const express = require('express')
const router = express.Router()

// setting middleware, checking if session is exist
const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.render('index')
  } else {
    next()
  }
}

// setting main page route
router.get('/', redirectLogin, (req, res) => {
  console.log(req.session)
  const userName = req.session.name
  res.render('success', { userName })
})

module.exports = router
