'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var middleware = require('./middleware');

function errorHandler(err, req, res, next) {
  console.dir(err, err.stack);
  return res.status(500).send('unknown error');
}

module.exports = function () {
  var app = express();

  app.disable('x-powered-by');

  app.use(errorHandler);
  app.use(bodyParser.raw({type: 'application/*'}));

  app.post('*', middleware());
  app.post('/', function (req, res) {
    return res.status(202).send('accepted');
  });

  return app;
};
