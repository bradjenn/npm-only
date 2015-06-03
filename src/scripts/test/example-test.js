'use strict';

var testModule = require('../test-module');

describe('example unit test one', function () {
  it('returns the correct sum', function () {
    expect(testModule.testOne()).to.equal(2);
  });
});

describe('example unit test two', function () {
  it('returns the correct sum', function () {
    expect(testModule.testTwo(5)).to.equal(25);
  });
});
