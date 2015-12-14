var express = require('express');
var serveStatic = require('serve-static');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var json = require('express-json');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');


module.exports = function (app) {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/../server/views');
	app.set('view engine', 'ejs');
	app.use(morgan('dev'));
	app.use(json());
	app.use(bodyParser.urlencoded({ extended: true}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(cookieParser());
	app.use(serveStatic(__dirname + '/../public'));
	app.use(session({
  secret: 'octocat',
  saveUninitialized: false,
  resave: false}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());

	//passport config
	var User = require('../server/models/User');

	passport.use(new LocalStrategy(User.authenticate()));
	passport.serializeUser(User.serializeUser());
	passport.deserializeUser(User.deserializeUser());

	//mongoose
	mongoose.connect('mongodb://artemis:league@ds059284.mongolab.com:59284/artemisgg');

};
