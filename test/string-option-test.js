var mocha  = require('mocha')
  , assert = require('chai').assert
  , expect = require('chai').expect
  ;

var JSONbig = require('../index');

describe("Testing 'storeAsString' option", function(){
    var key = '{ "key": 12345678901234567 }';
    it("Should show that the key is of type object", function(done){
        var result = JSONbig.parse(key);
        expect(typeof result.key).to.equal("bigint");
        done();
    });

    it("Should show that key is of type string, when storeAsString option is true", function(done){
        var result = JSONbig.parse(key, undefined, {"storeAsString": true});
        expect(typeof result.key).to.equal("string");
        done();
    });
});
