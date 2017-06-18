module.exports = function (app, express) {
  app.get('/api/testRoute', function (req, res) {
    res.send('api route working fine!');
  });
};
