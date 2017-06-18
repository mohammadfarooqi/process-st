module.exports = function (app, express) {
  //test route to test server side connectivity
  app.get('/api/testRoute', function (req, res) {
    res.send('api route working fine!');
  });
};
