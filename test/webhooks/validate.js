'use strict';

var validate = require('../../lib/webhook/validate');
var test = require('tape');

test('validate', function (t) {
  var headers = {header:'yes'};
  var v = validate(headers);
  var req = {get: function (key) {
    return headers[key];
  }};
  headers = {header:'yes'};

  t.ok(v(req));
  t.end();
});
