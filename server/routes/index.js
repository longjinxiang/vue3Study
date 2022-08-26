const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})


router.post('/login', function (req, res, next) {
  res.send({
    "data": {
      "id": 500,
      "rid": 0,
      "username": "admin",
      "mobile": "123",
      "email": "123@qq.com",
      "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE1MTI1NDQyOTksImV4cCI6MTUxMjYzMDY5OX0.eGrsrvwHm-tPsO9r_pxHIQ5i5L1kX9RX444uwnRGaIM"
    },
    "meta": {
      "msg": "登录成功",
      "status": 200
    }
  })
})

router.post('/menus', function (req, res, next) {
  res.render('index', { title: 'Express' })
})


module.exports = router
