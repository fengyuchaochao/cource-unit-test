require('should');
const sum = require('../js/sum');
const fs = require('fs');

describe('测试', () => {
    describe('求和', () => {
        it('sum() should return 0', () => {
            sum().should.eql(0);
        })
        it('sum(1) should return 1', () => {
            sum([1]).should.eql(1);
        });
        it('sum(1, 2) should return 3', () => {
            sum([1, 2]).should.eql(3);
        });
        it('sum(1, 2, 3) should return 6', () => {
            sum([1, 2, 3]).should.eql(6);
        });
    });
    // describe("readFile", function() {
    //     it("The file content should be fengyuchao", function(done) {
    //         fs.readFile("../js/text.txt", "utf8", function(err, data) {
    //             data.should.eql("fengyuchao");
    //             done();
    //         });
    //     });
    // });
});