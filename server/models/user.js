var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  username: {
    type: String
  },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  yearsOfService: Number,
  _id: { type: String, required: true }
}, { versionKey: false });

module.exports = mongoose.model('User', userSchema);
