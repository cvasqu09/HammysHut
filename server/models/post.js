var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  username: {
    type: String,
    required: true // Maybe have a validator for the username and the user_id
  },
  replies: {
    type: Array
  },
  user_id: {
    type: String,
    required: true,
    ref: 'User'
  }
}, { versionKey: false });

module.exports = mongoose.model('Post', postSchema);
