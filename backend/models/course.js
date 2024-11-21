const mongoose = require('mongoose');

const partSchema = mongoose.Schema({
  name: String, 
  link: String,
  likes: Number,
  id: Number
})

const coursesSchema = mongoose.Schema({
  name: String,
  parts: [partSchema]
})

coursesSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Course', coursesSchema)