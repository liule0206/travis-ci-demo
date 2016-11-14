var add = require('./add.js');
var expect = require('chai').expect;

describe('CI构建测试', function () {
    it('CI构建测试 输出Hello Node', function () {
        expect(hello()).to.be.equal("Hello Node")
    })
})