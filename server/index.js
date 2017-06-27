var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '../build')));

/**
* Get port from environment and store in Express.
*/
app.set('port', process.env.PORT || '3001');

require('./app')(app);

var server = http.createServer(app);

/**
* Listen on provided port, on all network interfaces.
*/
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
require('./server.js')(server);
// require('../src/App.js')(server);
