var thing = require('core-util-is');
var assert = require('assert');
var utils = module.exports = {};

utils.stringToRegExp = function (str, flags) {
  assert( thing.isString(str) ||
          thing.isRegExp(str),
          'stringToRegExp requires a string or RegExp' );

  flags || (flags = '');
  if (thing.isRegExp(str)) {
    return str;
  }
  str = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  return new RegExp(str, flags);
};
