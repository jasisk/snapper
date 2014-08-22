'use strict';

var thing = require('core-util-is');
var utils = require('../utils');
var assert = require('assert');


module.exports = function (headers) {

  headers || (headers = {});

  Object.keys(headers).forEach(function (header) {
    var _header, regex;

    _header = headers[header];

    if (!thing.isFunction(_header)) {
      regex = utils.stringToRegExp(_header);

      headers[header] = function (value) {
        return regex.test(value);
      };
    }
  });


  return function validateRequest(req) {
    return Object.keys(headers).every(function (header) {
      return headers[header].call(req, req.get(header));
    });
  };
};
