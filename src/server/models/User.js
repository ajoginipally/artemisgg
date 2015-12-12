var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	username: {
		type: String,
		default: ''
	},
	password: {
		type: String,
		default: ''
	},
  admin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', schema);
