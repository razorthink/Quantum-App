var	express	= require('express'),
	server	= express(),
	child	= require('child_process'),
	fs		= require('fs');

var	scriptDir	= "render_scripts",
	imageDir	= "render_images";

server.use(express.static(__dirname + '/app'));
server.use(express.bodyParser());

server.listen(8030);
console.log("Serving static pages on port: 8030");
