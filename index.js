'use strict';

var express = require('express');
var webhook = require('./lib/webhook');
var app = express();

function errorHandler(err, req, res, next) {
  console.dir(err, err.stack);
  return res.status(500).send('unknown error');
}

app.disable('x-powered-by');

app.use(errorHandler);
app.use('/hook', webhook());

app.use('*', function (req, res) {
  res.status(404).send('Not Found');
});

app.listen(8000);
