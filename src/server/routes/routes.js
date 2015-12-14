module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index', { message: req.flash('info') });
  });
  require('./api.js')(app);
};
