const express = require('express');
const app = express();

const project = require('./package');
const {db} = require('./models');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/cars', function (req, res) {
	console.log();
});

app.get('/api/status', function (req, res) {
	res.send(project.version);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

