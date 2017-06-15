var expect = require("chai").expect,
    CountrilyData = require("../");

describe("Countrily Data", function(){
    it("should show some data", function(done){
        console.log(CountrilyData);
        expect(CountrilyData).to.be.an("array");
        done();
    });
});