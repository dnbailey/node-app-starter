const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.set('port', process.env.PORT || 3000)

app.set('view engine', 'pug')

app.use('/', require('./routes/index.js'))

app.listen(app.get('port'), () => {
  console.log('Listening on ' + app.get('port'))
})
