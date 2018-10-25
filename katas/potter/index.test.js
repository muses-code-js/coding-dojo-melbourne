const _ = require('lodash');
const { it, describe } = require('mocha');
const { assert, expect } = require('chai')

const { potter, freq, removeZeros, calculateSetPrice, removeSet } = require('./index')

describe('the Potter discounts', () => {
  it('should return 0 if nothing given', () => {
    expect(potter()).to.equal(0);
  });

  it('should return the appropriate discount for different books', () => {
    expect(potter([0])).to.equal(8);
    expect(potter([0, 1])).to.equal(15.2);
    expect(potter([0, 1, 2])).to.equal(21.6);
    expect(potter([0, 1, 2, 3])).to.equal(25.6);
    expect(potter([0, 1, 2, 3, 4])).to.equal(30)
  });

  it('should return the correct prices', () => {
    expect(potter([1, 2, 3, 1, 2, 3, 4, 3])).to.equal(55.2);
    expect(potter([2, 2, 2, 2, 2, 4, 3, 1, 1])).to.equal(64.8);
    expect(potter([0, 1, 2, 4, 2, 3, 2, 1, 0, 0])).to.equal(66.8);
    expect(potter([1, 1, 1, 1, 1, 1, 2])).to.equal(55.2);
    expect(potter([2, 3, 4, 0, 0, 1])).to.equal(38);
  });

  // it('should throw an error if book number is invalid', () => {
  //   expect(() => potter([1, 1, 1, 1, 1, 1, 6])).to.throw();
  // })

  it('should not apply discount for two same books', () => {
      expect(potter([0, 0])).to.equal(16);
    })
})
describe('the frequence function', () => {
  it('should retunr the frequency function', () => {
    expect(freq([1, 1, 2, 2])).to.deep.equal([0, 2, 2, 0, 0])
  });
});

describe('removing zeros from frequency array', () => {
  it('should remove zeros from the array', () => {
    expect(removeZeros([0, 0, 1, 2, 1])).to.deep.equal([1, 2, 1])
  })
})

describe('return the price of the set', () => {
  it('should calculate the price including correct discount', () => {
    expect(calculateSetPrice(1)).to.equal(8);
    expect(calculateSetPrice(2)).to.equal(15.2);
    expect(calculateSetPrice(3)).to.equal(21.6);
    expect(calculateSetPrice(4)).to.equal(25.6);
    expect(calculateSetPrice(5)).to.equal(30)
  })
})

describe('removing the calculated set from the frequency array', () => {
  it('should remove 1 from each element of the array', () => {
    expect(removeSet([1, 2, 1])).to.deep.equal([0, 1, 0])
  })
})


