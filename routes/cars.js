const express = require('express');
const router = express.Router();
const models = require('../models').db;

router.get('/', function (req, res) {
	models.Car.findAll().then(function(cars){
		res.json(cars);
	});
});

module.exports = router;
