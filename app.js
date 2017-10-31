const express = require('express');

const status = require('./routes/status');
const cars = require('./routes/cars');

const app = express();

app.use('/', status);
app.use('/cars', cars);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
