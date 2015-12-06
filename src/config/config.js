var express = require('express');
var serveStatic = require('serve-static');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var json = require('express-json');
var methodOverride = require('method-override');

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

	if(!process.env.DB_USER || !process.env.DB_PASSWORD){
		console.log("Error: Database login credentials are not defined");
		process.exit();
	}

	if ('development' == app.get('env')) {

	}

	if ('production' == app.get('env')) {

	}
};
