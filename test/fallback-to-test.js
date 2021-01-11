var mocha  = require('mocha')
  , assert = require('chai').assert
  , expect = require('chai').expect
  ;

var JSONbig = require('../index');

describe("Testing 'fallbackTo' option", function(){
    var originalBigInt = global.BigInt;

    before(() => {
        global.BigInt = null;
    })

    after(() => {
        global.BigInt = originalBigInt;
    })

    var key = '{ "key": 12345678901234567 }';
    it("Should show default to use Number as does native JSON", function(done){
        var result = JSONbig.parse(key);
        expect(typeof result.key).to.equal("number");
        expect(result.key).to.equal(12345678901234567);
        done();
    });

    it("Should use string if needed", function(done){
        var result = JSONbig.parse(key, undefined, {"fallbackTo": "string"});
        expect(typeof result.key).to.equal("string");
        expect(result.key).to.equal("12345678901234567");
        done();
    });

    it("Should error out if needed", function(done){
        expect(() => {
            JSONbig.parse(key, undefined, {"fallbackTo": "error"});
        }).to.throw('BigInt is not a function');
        done();
    });
});
