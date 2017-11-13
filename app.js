const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Setup the application
const app = express()
app.set('port', process.env.PORT || 3000)

// Set pug to be the view engine
app.set('view engine', 'pug')

// Static route for public files
app.use(express.static(path.join(__dirname, 'public')))

// Parse data from forms
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Connect to the database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://mongo:27017', { useMongoClient: true })
  .catch(err => {
      console.error('App starting error:', err.stack);
      process.exit(1);
  })

// Routes
app.use('/', require('./routes/index.js'))

// Start the server at the port
app.listen(app.get('port'), () => {
  console.log('Listening on ' + app.get('port'))
})
