var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	user: String, password: String, token: String});

model.exports = mongoose.model('User', userSchema);