var mocha = require('mocha'),
  assert = require('chai').assert,
  expect = require('chai').expect;

var JSONbig = require('../index');

describe("Testing 'strict' option", function () {
  var dupkeys = '{ "dupkey": "value 1", "dupkey": "value 2"}';
  it('Should show that duplicate keys just get overwritten by default', function (done) {
    var result = 'before';
    function tryParse() {
      result = JSONbig.parse(dupkeys);
    }
    expect(tryParse).to.not.throw('anything');
    expect(result.dupkey).to.equal('value 2');
    done();
  });

  it("Should show that the 'strict' option will fail-fast on duplicate keys", function (done) {
    var result = 'before';
    function tryParse() {
      result = JSONbig.parse(dupkeys, undefined, { strict: true });
    }

    expect(tryParse).to.throw('Duplicate key "dupkey"');
    expect(result).to.equal('before');
    done();
  });
});
