const express = require('express');
const router = express.Router();
const project = require('../package');

router.get('/version', function (req, res, next) {
	res.send(project.version);
});

router.get('/', function (req, res, next) {
  res.send('Hello World!');
});

module.exports = router;
