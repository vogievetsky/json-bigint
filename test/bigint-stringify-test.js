var mocha = require('mocha')
  , assert = require('chai').assert
  , expect = require('chai').expect
  ;

var JSONbig = require('../index');

describe("Testing native BigInt support: stringify", function () {
  it("Should show JSONbig can stringify native BigInt", function (done) {
    var obj = {
      // We cannot use n-literals - otherwise older NodeJS versions fail on this test
      big: eval("123456789012345678901234567890n"),
      small: -42,
      bigConstructed: BigInt(1),
      smallConstructed: Number(2),
    };
    expect(obj.small.toString(), "string from small int").to.equal("-42");
    expect(obj.big.toString(), "string from big int").to.equal("123456789012345678901234567890");
    expect(typeof obj.big, "typeof big int").to.equal('bigint');

    var output = JSONbig.stringify(obj);
    expect(output).to.equal(
      '{' +
      '"big":123456789012345678901234567890,' +
      '"small":-42,' +
      '"bigConstructed":1,' +
      '"smallConstructed":2' +
      '}'
    );
    done();
  });
});