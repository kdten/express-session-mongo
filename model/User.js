const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    _id: {
      type: String,
      required: true
    },
    citylist: {
      type: [String],
      required: false,
      default: []
    }
  });

module.exports = mongoose.model('User', UserSchema)