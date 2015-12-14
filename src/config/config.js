var express = require('express');
var serveStatic = require('serve-static');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var json = require('express-json');
var methodOverride = require('method-override');
var passport = require('passport');
var session = require('express-session');
var passportLocalMongoose = require('passport-local-mongoose');


module.exports = function (app) {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/../server/views');
	app.set('view engine', 'ejs');
	app.use(morgan('dev'));
	app.use(json());
	app.use(bodyParser.urlencoded({ extended: true}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(serveStatic(__dirname + '/../public'));
	app.use(passport.initialize());
	app.use(session({
		secret: 'octocat',
		saveUninitialized: false,
		resave: false
	}));




	mongoose.connect('mongodb://artemis:league@ds059284.mongolab.com:59284/artemisgg');
};
