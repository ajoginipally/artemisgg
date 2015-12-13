var mongoose = require('mongoose'),
		passportLocalMongoose = require('passport-local-mongoose');


var User = new mongoose.Schema({
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
    defualt: false
  }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
