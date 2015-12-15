module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index', { title : 'artemisgg' });
  });
  require('./api.js')(app);
};
