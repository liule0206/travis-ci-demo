'use strict';
var hello = require('./hello.js');
var expect = require('chai').expect;

describe('CI构建测试', function () {
    it('CI构建测试 输出 Hello Node', function () {
        expect(hello()).to.equal("Hello Node");
    });
});