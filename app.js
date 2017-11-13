const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.set('port', process.env.PORT || 3000)

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.Promise = global.Promise
mongoose.connect('mongodb://mongo:27017', { useMongoClient: true })
  .catch(err => {
      console.error('App starting error:', err.stack);
      process.exit(1);
  })

app.use('/', require('./routes/index.js'))

app.listen(app.get('port'), () => {
  console.log('Listening on ' + app.get('port'))
})
