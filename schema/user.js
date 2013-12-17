var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	fname: {type: String, default: ''},
	lname: {type: String, default: ''},
	email: {type: String, default: ''},
	password: {type: String, default: ''}
});

module.exports = mongoose.model('User', userSchema);
