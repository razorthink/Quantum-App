var	express		= require('express'),
	services	= require('./services'),
	mongoose	= require('mongoose'),
	server		= express();

mongoose.connect('localhost', 'quantum');

server.use(express.static(__dirname + '/app'));
server.use(express.bodyParser());
server.use(express.cookieParser());
server.use(express.session({secret: '123123123'}));

services(server); //Handle AJAX requests

server.listen(8030);
console.log("Serving static pages on port: 8030");

//Globally expose server
module.exports = server;