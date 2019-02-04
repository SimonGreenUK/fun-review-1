const { expect } = require('chai');
const invert = require('../challenges/challenge2');

describe('invert', () => {
  it('returns a new function', () => {
    const newFunc = invert();
    expect(newFunc).to.be.a('function');
  });
  it('the returned function negates the return value of a function taking no arguments', () => {
    const returnsTrue = () => true;
    const returnsFalse = invert(returnsTrue);
    expect(returnsFalse()).to.be.false;
  });
  it('the returned function negates the return value of a function taking one argument',() => {
    const isEven = n => n % 2 === 0;
    const isOdd = invert(isEven);
    let actual = isOdd(13);
    expect(actual).to.be.true;
    actual = isOdd(10);
    expect(actual).to.be.false;
  })
  it('invert works for functions taking any number of arguments', () => {
    const isSumBiggerThan100 = function (...args) {
      return args.reduce((acc,val) => acc + val) > 100;
    };
    const isSumLessThanOrEqualTo100 = invert(isSumBiggerThan100);
    actual = isSumLessThanOrEqualTo100(10, 3, 8, 5, 4 ,20);
    expect(actual).to.be.true;
    actual = isSumLessThanOrEqualTo100(70, 10, 50, 23);
    expect(actual).to.be.false;
  });
});
