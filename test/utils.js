var utils = require('../lib/utils');
var test = require('tape');

test('utils', function (t) {


  t.test('stringToRegExp', function (t) {


    t.test('inputs', function (t) {

      // invalid
      [null, undefined, true, 1, [], {}].forEach(function (input) {
        t.throws(utils.stringToRegExp.bind(utils, input));
      });

      //valid
      ['', 'yup', /.*/i].forEach(function (input) {
        t.doesNotThrow(utils.stringToRegExp.bind(utils, input));
      });

      t.end();
    });


    t.test('output', function (t) {

      ['words', '-/\\^$*+?.()|[]{}'].forEach(function (str) {
        var regex = utils.stringToRegExp(str);
        t.ok( regex.test(str) &&
              regex.test('blah' + str) &&
              regex.test(str + 'blah') &&
              regex.test('blah' + str + 'blah'), 'regex should work');
      });

      t.end();
    });


    t.test('flags', function (t) {
      var regex, str, matches;

      regex = utils.stringToRegExp('.', 'g');
      str = '.....';
      matches = str.match(regex);
      t.equal(matches.length, str.length);

      str = 'yoYOyO';

      regex = utils.stringToRegExp('yo', 'g');
      matches = str.match(regex);
      t.equal(matches.length, 1);

      regex = utils.stringToRegExp('yo', 'ig');
      matches = str.match(regex);
      t.equal(matches.length, 3);

      t.end();
    });


  });
});
