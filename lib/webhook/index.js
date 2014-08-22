'use strict';

var middleware = require('./middleware');
var bodyParser = require('body-parser');
var Router = require('express').Router;

function errorHandler(err, req, res, next) {
  console.dir(err, err.stack);
  return res.status(500).send('unknown error');
}

module.exports = function () {
  var router = Router();

  router.use(errorHandler);
  router.use(bodyParser.raw({type: 'application/*'}));

  router.post('*', middleware());
  router.post('/', function (req, res) {
    return res.status(202).send('accepted');
  });

  return router;
};
