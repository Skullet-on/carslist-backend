var express = require('express');
var app = express();
var project = require('./package');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/status', function (req, res) {
	res.send(project.version);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

