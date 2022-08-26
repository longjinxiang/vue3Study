const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
const uploadRouter = require('./routes/api/Upload')
const downloadloadRouter = require('./routes/api/DownLoad')
const curdRouter = require('./routes/api/Curd')
const usersRouter = require('./routes/users')
const testRouter = require('./routes/test')
const app = express()

// 处理跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  req.method == "OPTIONS" ? res.send(200) : next()
})

app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: '1024mb'
  })
)

app.use(express.static('static'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/api/uploader', uploadRouter)
app.use('/api/downloader', downloadloadRouter)
app.use('/api/curd', curdRouter)
app.use('/users', usersRouter)
app.use('/test', testRouter)

module.exports = app
