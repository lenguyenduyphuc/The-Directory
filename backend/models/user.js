const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 3
  },
  passwordHash: {
    type: String,
    required: true,
  },
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User;