const express = require('express')
const router = express.Router()

// setting main page route
router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
