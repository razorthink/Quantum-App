var mongoose	= require('mongoose'),
	User 		= require('../schema/user'),
	_			= require('underscore');

var users = {
	login: function (req, res) {
		var email = req.body.email,
			pswd = req.body.password;

		User.findOne({email: email, password: pswd}, function (err, user) {
			if(!_.isNull(user)) {
				req.session.isLoggedIn = true;
				req.session.user = user._id;
				console.log("User: " + user.fname + " logged in.");

				res.send(200, "Login successful");
			} else {
				res.send(400, "Invalid email or password, please verify and try again");
			}
		});
	},

	logout: function (req, res) {
		req.session.isLoggedIn = false;

		if(!_.isUndefined(req.session.user)) {
			User.findOne({_id: req.session.user}, function (err, user) {
				req.session.user = undefined;
				console.log("User: " + user.fname + " logged out.");

				res.send(200, "Logout successful");
			});
		} else {
			res.send(400, "Cannot logout before logging in");
		}
	},

	signUp: function (req, res) {
		User.findOne({email: req.body.email}, function (err, user) {
			if(_.isNull(user)) {
				//Create a new user
				User.create({
					fname: req.body.fname,
					lname: req.body.lname,
					email: req.body.email,
					password: req.body.password
				}, function (err) {
					res.send(200, "Signup successful");
				});
			} else {
				res.send(400, "User with that email already exists");
			}
		});
	}
};

module.exports = users;