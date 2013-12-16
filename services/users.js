var appData		= require('../fixture'),
	_			= require('underscore');

var users = {
	login: function (req, res) {
		var email = req.body.email,
			pswd = req.body.password;

		var user = _.find(appData.users, function (user) {
			return (user.email == email && user.password == pswd);
		});

		if (!_.isUndefined(user)) {
			req.session.isLoggedIn = true;

			req.session.user = user.UID;

			console.log("User: " + user.fname + " logged in.");
			res.send("login successful");
		} else {
			res.send("Invalid email or password, please verify and try again");
		}
	},

	logout: function (req, res) {
		req.session.isLoggedIn = false;

		if(!_.isUndefined(req.session.user)) {
			var user = _.find(appData.users, function (user) {
				return (user.UID == req.session.user);
			});

			console.log("User: " + user.fname + " logged out.");
			req.session.user = undefined;
			res.send("logout successful");
		} else {
			res.send("Can not logout before logging in");
		}
	},

	signUp: function (req, res) {
		//TODO add credentials into db
	}

};

module.exports = users;