var users		= require('./services/users'),
	visuals		= require('./services/visuals'),
	pitches		= require('./services/pitches');

var services = function (server) {
	server.post('/users/login', users.login);
	server.get('/users/logout', users.logout);
	server.post('/users/signup', users.signUp);


	server.get('/visuals', visuals.getAllVisuals);
	server.get('/visuals/:user', visuals.getUserVisuals);
	server.post('/visuals/:user', visuals.createUserVisual);
	server.del('/visuals/:user', visuals.deleteUserVisual);
	server.put('/visuals/:user', visuals.editUserVisual);
	server.get('/visuals/:user/:projectID/comments', visuals.getUserVisualComments);
	server.post('/visuals/:user/:projectID/comments', visuals.createUserVisualComments);


	server.get('/pitches', pitches.getAllPitches);
	server.get('/pitches/:user', pitches.getUserPitches);
	server.post('/pitches/:user', pitches.createUserPitch);
	server.del('/pitches/:user', pitches.deleteUserPitch);
	server.put('/pitches/:user', pitches.editUserPitch);
	server.get('/pitches/:user/:pitchID/comments', pitches.getUserPitchComments);
	server.post('/pitches/:user/:pitchID/comments', pitches.createUserPitchComments);
}

module.exports = services;