// var respond = require("../lib/respond");

var passport = require('passport');
var User = require("../models/User");

module.exports = function (app) {

  //intro
  app.get('/api', function(req, res) {
    res.json("welcome to the artemisgg api!")
  });

  //register user
  app.post('/api/register', function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
        req.flash('info', 'something went wrong!')
        res.redirect('/#/register')
      }

      passport.authenticate('local')(req, res, function () {
        res.redirect('/');
      });
    });
  });

  //login
  app.post('/api/login', passport.authenticate('local'), function(req, res) {
    res.cookie('userName', req.user.username, {maxAge: 900000, httpOnly: false});
    res.redirect('/');
  });


  app.get('/api/logout', function(req, res) {
    res.clearCookie('userName');
    req.logout();
    res.redirect('/');
  });

}
