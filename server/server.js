var express = require('express');
var app = express();

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = process.env.PORT || 8000;

// start listening to requests on port 8000 or process.env.port
app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});

// export our app for testing and flexibility
module.exports = app;
