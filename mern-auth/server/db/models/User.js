const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  salt: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
//   ,
//   userType: {
//     type: String,
//     enum: ['admin', 'regular'],
//     default: 'regular'
//   }
});

const User = mongoose.model('User', userSchema);

module.exports = User;