const express = require('express')
const router = express.Router()

router.get('/query', function (req, res, next) {
  res.send('/api/curd/query')
})

router.get('/insert', function (req, res, next) {
  res.send('/api/curd/insert')
})

module.exports = router
