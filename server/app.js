const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.use(express.static(path.join(__dirname,'..', 'build')));

app.get('/', function (req, res) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
module.exports = app;
