var respond = require("../lib/respond");

var passport = require('passport');
var User = require("../models/User");

module.exports = function (app) {

  //intro
  app.get('/api', function(req, res) {
    res.json("welcome to the artemisgg api!")
  });

  app.get('/api/user', function(req,res){
    User.find({}, function(err, docs){
      return respond(res, err, docs);
    });
  });

  //register user
  app.post('/api/register', function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
        res.redirect('/#/register');
      }

      passport.authenticate('local')(req, res, function () {
        res.redirect('/');
      });
    });
  });

  //login
  app.post('/api/login', passport.authenticate('local'), function(req, res) {
    res.cookie('userName', req.user.username, {maxAge: 900000, httpOnly: false});
    res.cookie('admin', req.user.admin, {maxAge: 900000, httpOnly: false})
    res.redirect('/');
  });


  app.get('/api/logout', function(req, res) {
    res.clearCookie('userName');
    res.clearCookie('admin');
    req.logout();
    res.redirect('/');
  });

}
