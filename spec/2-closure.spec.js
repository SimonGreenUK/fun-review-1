const { expect } = require("chai");
const { invert, flip, rememberMe } = require("../challenges/2-closure");
const sinon = require("sinon");

describe("invert", () => {
  it("returns a new function", () => {
    const newFunc = invert();
    expect(newFunc).to.be.a("function");
  });
  it("the returned function negates the return value of a function taking no arguments", () => {
    const returnsTrue = () => true;
    const returnsFalse = invert(returnsTrue);
    expect(returnsFalse()).to.be.false;
  });
  it("the returned function negates the return value of a function taking one argument", () => {
    const isEven = n => n % 2 === 0;
    const isOdd = invert(isEven);
    let actual = isOdd(13);
    expect(actual).to.be.true;
    actual = isOdd(10);
    expect(actual).to.be.false;
  });
  it("invert works for functions taking any number of arguments", () => {
    const isSumBiggerThan100 = function(...args) {
      return args.reduce((acc, val) => acc + val) > 100;
    };
    const isSumLessThanOrEqualTo100 = invert(isSumBiggerThan100);
    actual = isSumLessThanOrEqualTo100(10, 3, 8, 5, 4, 20);
    expect(actual).to.be.true;
    actual = isSumLessThanOrEqualTo100(70, 10, 50, 23);
    expect(actual).to.be.false;
  });
});

describe("#flip", () => {
  it("returns a new function", () => {
    const newFunc = flip();
    expect(newFunc).to.be.a("function");
  });
  it("function returned by flip returns an invocation to the passed binary function with the arguments in reverse order", () => {
    const subtract = (a, b) => a - b;
    const flipSubtract = flip(subtract);
    const actual = flipSubtract(10, 3);
    const expected = -7;
    expect(actual).to.equal(expected);
  });
  it("function returned by flip returns an invocation to the passed binary function with the arguments in reverse order", () => {
    const doArithmetic = (a, b, c) => a * b + c;
    const doFlippedArithmetic = flip(doArithmetic);
    const actual = doFlippedArithmetic(10, 3, 5);
    const expected = 25;
    expect(actual).to.equal(expected);
  });
  it("function returned by flip returns an invocation to the passed function (taking any number of arguments) with the arguments in reverse order", () => {
    function joinWithHyphen(...args) {
      return args.join("-");
    }
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    let randomSliceIndex = Math.floor(Math.random() * 26);
    const flipJoinWithHyphen = flip(joinWithHyphen);
    const input = alphabet.slice(0, randomSliceIndex);
    const actual = flipJoinWithHyphen(...input);
    const expected = input.reverse().join("-");
    expect(actual).to.equal(expected);
  });
});

describe("rememberMe", () => {
  it("returns a new function", () => {
    expect(rememberMe()).to.be.a("function");
  });
  it("maintains the functionality of the input function when no args are passed", () => {
    const returnTwo = () => 2;
    const rememberReturnTwo = rememberMe(returnTwo);
    expect(rememberReturnTwo()).to.equal(2);
  });
  it("maintain the functionality of the input function with args", () => {
    const addNums = (a, b, c, d, e) => a + b + c + d + e;
    const rememberAddNums = rememberMe(addNums);
    expect(rememberAddNums(1, 2, 3, 4, 5)).to.equal(15);
  });
  it("only calls the function once per unique set of arguments", () => {
    const addNums = (a, b, c, d, e) => a + b + c + d + e;
    const spiedAdder = sinon.spy(addNums);
    const rememberSpiedAdder = rememberMe(spiedAdder);
    expect(rememberSpiedAdder(1, 2, 3, 4, 5)).to.equal(15);
    expect(rememberSpiedAdder(1, 2, 3, 4, 5)).to.equal(15);
    expect(spiedAdder.callCount).to.equal(1);
    expect(rememberSpiedAdder(1, 2, 3, 4, 6)).to.equal(16);
    expect(rememberSpiedAdder(1, 2, 3, 4, 6)).to.equal(16);
    expect(spiedAdder.callCount).to.equal(2);
  });
});
