const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.post('/', (req, res) => {
  const toLogin = req.body
  User.find().lean()
    .then(users => {
      const validUser = users.find(user =>
        toLogin.email === user.email && toLogin.password === user.password
      )
      if (validUser) {
        res.render('success', { validUser })
      } else {
        res.render('failure')
      }
    })
})

router.post('/failure', (req, res) => {
  res.redirect('/')
})

module.exports = router
