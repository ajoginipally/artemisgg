var express = require('express');
var json = require('express-json');
var serveStatic = require('serve-static');

module.exports = function (app) {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/server/views');
  app.set('view engine', 'ejs');
  app.use(serveStatic(__dirname + '/../public'));

}
