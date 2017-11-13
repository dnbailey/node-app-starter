const mongoose = require('mongoose')

let indexSchema = new mongoose.Schema({
  title: String
})

module.exports = mongoose.model('Index', indexSchema)
