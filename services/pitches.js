var mongoose	= require('mongoose'),
	User 		= require('../schema/pitch'),
	_			= require('underscore');

var pitches = {
	getAllPitches: function (req, res) {},

	getUserPitches: function (req, res) {},

	createUserPitch: function (req, res) {},

	deleteUserPitch: function (req, res) {},

	editUserPitch: function (req, res) {},

	getUserPitchComments: function (req, res) {},

	createUserPitchComments: function (req, res) {}
}

module.exports = pitches;