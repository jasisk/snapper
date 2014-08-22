'use strict';

var signature = require('./signature');
var validate = require('./validate');

module.exports = function (secret) {
  var hmac, headers, validHeaders;

  hmac = signature(secret || 'secret');

  headers = {
    'X-Hub-Signature': function (signature) {
      if (!Buffer.isBuffer(this.body)) {
        return false;
      }
      var calculated = hmac(this.body.toString());
      return calculated === signature;
    }
  };

  validHeaders = validate(headers);

  return function middleware(req, res, next) {
    if (!validHeaders(req)) {
      return res.status(403).send('invalid headers');
    }
    next();
  };
};
