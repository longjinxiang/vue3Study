const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.send('εεΊζε!')
})

module.exports = router
