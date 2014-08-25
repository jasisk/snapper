'use strict';

var signature = require('../../lib/webhook/signature');
var test = require('tape');

var KNOWN = {
  body: 'test',
  secret: 'secret',
  algorithm: 'sha1',
  hash: '1aa349585ed7ecbd3b9c486a30067e395ca4b356'
};

test('signature', function (t) {
  var hash = signature(KNOWN.secret, KNOWN.algorithm);

  t.equal(hash(KNOWN.body), KNOWN.algorithm + '=' + KNOWN.hash);
  t.end();
});


test('signature default algo sha1', function (t) {
  var hash = signature(KNOWN.secret);

  t.equal(hash(KNOWN.body), 'sha1=' + KNOWN.hash);
  t.end();
});
