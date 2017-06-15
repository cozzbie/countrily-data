var expect = require("chai").expect,
    CountrilyData = require("../");

describe("Countrily Data", function(){
    it("should return an array of data", function(done){
        expect(CountrilyData).to.be.an('array');
        done();
    });

    it("should show total data is 251", function (done) {
        expect(CountrilyData.length).to.equal(251);
        done();
    });
});