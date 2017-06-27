const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors')

exports = module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  //HomePage
  app.get('/*', function (req, res, next) {
    res.sendFile(path.join(__dirname ,'/../build/index.html'));
  });
};
