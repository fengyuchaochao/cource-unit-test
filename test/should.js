require('should');
const sum = require('../js/sum');
const fs = require('fs');

describe('#sum.js', () => {
    describe('#sum()', () => {
        it('sum() should return 0', () => {
            sum().should.eql(0);
        })
        it('sum(1) should return 1', () => {
            sum().should.eql(0);
        });
        it('sum(1, 2) should return 3', () => {
            sum().should.eql(0);
        });
        it('sum(1, 2, 3) should return 6', () => {
            sum().should.eql(0);
        });
    });
    describe("readFile", function() {
        it("The file content should be fengyuchao", function(done) {
            fs.readFile("../js/text.txt", "utf8", function(err, data) {
                data.should.eql("fengyuchao");
                done();
            });
        });
    });
});