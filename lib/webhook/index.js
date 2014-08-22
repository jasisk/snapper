'use strict';

var middleware = require('./middleware');
var bodyParser = require('body-parser');
var Router = require('express').Router;

module.exports = function () {
  var router = Router();

  router.use(bodyParser.raw({type: 'application/*'}));

  router.post('*', middleware());
  router.post('/', function (req, res) {
    return res.status(202).send('accepted');
  });

  return router;
};
