const express = require('express')
const router = express.Router()
const User = require('../../models/user')

// 如果重新載入login頁面，會回到首頁路由，然後進到success頁面
router.get('/', (req, res) => {
  res.redirect('/')
})

// 送出帳號密碼核對，確認後取得session
router.post('/', (req, res) => {
  // 取得表單中的資料
  const toLogin = req.body
  User.find().lean()
    .then(users => {
    // 比對資料庫中是否有資料符合表單內容

      const validUser = users.find(user =>
        toLogin.email === user.email && toLogin.password === user.password
      )
      // 如果使用者驗證成功，則賦予session維持狀態，然後在session中加入name和userId，方便後續使用
      if (validUser) {
        req.session.name = validUser.name
        req.session.userId = validUser._id
        res.render('success', { validUser })
      } else {
        res.render('failure')
      }
    })
})

router.post('/try_again', (req, res) => {
  res.redirect('/')
})

module.exports = router
