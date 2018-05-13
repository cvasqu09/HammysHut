var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  date: {
    type: Date,
    required: true
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
