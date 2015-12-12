var express = require('express');
//var http = require('http');
var morgan     = require("morgan");
var bodyparser = require("body-parser");
var jwt        = require("jsonwebtoken");
var mongoose   = require("mongoose");
var app = express();

var port = process.env.PORT || 4000
var User = require('./models/User');


/*require('./config/config')(app);
require('./server/routes/routes.js')(app);*/

/*http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
*/