module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index');
  });
  require('./api.js')(app);
};
