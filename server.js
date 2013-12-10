var	express	= require('express'),
	server	= express(),
	child	= require('child_process'),
	fs		= require('fs');
	fixture	= require('./fixture');
	_		= require('underscore');

server.use(express.static(__dirname + '/app'));
server.use(express.bodyParser());

server.post('/users/login', function (req, res) {
	//console.log(JSON.stringify(req.body));

	var email = req.body.email,
		pswd = req.body.password;

	var user = _.find(fixture.users, function (user) {
		return user.email == "sandeep.kumar@razorthink.com";
	});

	if (!_.isUndefined(user) && fixture.users[0].password == pswd) {
		console.log("User: " + user.fname + " logged in.");
		res.send("login successful");
	} else {
		res.send("No user");
	}

});

server.listen(8030);
console.log("Serving static pages on port: 8030");

$.post('/users/login', {
	email: "Sandeep.asdasd",
	pswd: "asdasd"
}, function () {})
