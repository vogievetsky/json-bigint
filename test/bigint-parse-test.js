var mocha = require('mocha')
  , assert = require('chai').assert
  , expect = require('chai').expect
  ;

  var JSONbig = require('../index')

describe("Testing native BigInt support: parse", function () {
  var input = '{"big":92233720368547758070,"small":123}';

  it("Should show JSONbig does support parsing native BigInt", function (done) {
    var obj = JSONbig.parse(input);
    expect(obj.small, "small int").to.equal(123);
    expect(obj.big.toString(), "big int").to.equal("92233720368547758070");
    expect(typeof obj.big, "big int").to.equal('bigint');
    done();
  });

  it("Should show JSONbig does support native Bigint parse/stringify roundtrip", function (done) {
    var obj = JSONbig.parse(input);
    var output = JSONbig.stringify(obj);
    expect(output).to.equal(input);
    done();
  });

  it("Should show JSONbig does support native Bigint parse/stringify roundtrip when BigInt is forced", function (done) {
    var obj = JSONbig.parse(input);
    var output = JSONbig.stringify(obj);
    expect(output).to.equal(input);
    done();
  });

  it("Should show JSONbig does support long floats", function (done) {
    var obj = JSONbig.parse('{"float":0.333333333333333333333333333333333333333333333333}');
    expect(obj.float).to.equal(0.3333333333333333);
    done();
  });
});