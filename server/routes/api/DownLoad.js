const express = require('express')
const router = express.Router()
const path = require('path')

const baseDir = path.resolve(__dirname, '../../')
const uploadDir = path.join(baseDir, 'static_files')

router.get('/download/:name', (req, res) => {
  const name = req.params.name || ''
  res.download(path.join(uploadDir, name))
})

module.exports = router
