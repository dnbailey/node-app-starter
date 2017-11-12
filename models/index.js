const mongoose = require('mongoose')

let indexSchema = new mongoose.Schema({
  title: String,
  body: String
})

module.exports = mongoose.model('Index', indexSchema)
