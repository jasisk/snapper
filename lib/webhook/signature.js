'use strict';

var crypto = require('crypto');


module.exports = function (secret, algo) {
  algo || (algo = 'sha1');

  return function (body) {
    var hmac = crypto.createHmac(algo, secret);
    return algo + '=' + hmac.update(body).digest('hex');
  };
};
