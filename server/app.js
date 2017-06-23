const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors')

var allowCrossDomain = function(req, res, next) {
    if ('OPTIONS' == req.method) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname,'..', 'build')));

app.get('/', cors(), function (req, res) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.post('/', cors(), function(req, res, next){
  res.json({msg: "this is cors enabled?"})
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
module.exports = app;
