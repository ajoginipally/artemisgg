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
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
        return res.send("error", 404);
      }

      passport.authenticate('local')(req, res, function () {
        console.log("success");
        res.redirect('/');
      });
    });
  });

  //login
  app.post('/api/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    console.log('success')
  });

  app.get('/api/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });



  // app.get('/api/user', function(req,res){
	// 	User.find({}, function(err, docs){
	// 		return respond(res, err, docs);
	// 	});
	// });
  //
  // app.post('/api/user', function(req,res) {
  //   var newUser = new User({
  //     username: req.body.username,
  //     password: req.body.password,
  //     admin: false
  //   });
  //   newUser.save(function(err){
  //     respond(res, err);
  //   });
  // });





}
