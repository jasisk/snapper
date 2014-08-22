'use strict';

var express = require('express');
var webhook = require('./lib/webhook');
var app = express();

app.disable('x-powered-by');

app.use('/hook', webhook());

app.use('*', function (req, res) {
  res.status(404).send('Not Found');
});

app.listen(8000);
