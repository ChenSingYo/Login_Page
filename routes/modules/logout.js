const express = require('express')
const router = express.Router()

// 設定路由
router.post('/', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})

// 匯出路由器
module.exports = router
