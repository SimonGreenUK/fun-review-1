const { expect } = require('chai');
const { removeAgents, makeNameTags, createPoll } = require('../challenges/1-human-resources');
const NCFruitBowl = require('../data/challenge1-data');

describe('removeAgents', () => {
  it('returns an array containing an object with an employee with the profession of "artist" when passed an array with one object where the employees profession is "artist"', () => {
    expect(removeAgents([{ name: 'Sam', profession: 'artist' }])).to.eql([
      { name: 'Sam', profession: 'artist' },
    ]);
  });
  it('returns an empty array when passed an array with one object where the employees profession is "mole"', () => {
    expect(removeAgents([{ name: 'Liam', profession: 'mole' }])).to.deep.equal([]);
  });
  it('returns an array containing only one object with an employee with a profession other than "mole" when passed an array containing two objects, one of which is an employee who\'s profession is "mole" and the other\'s is something different', () => {
    expect(
      removeAgents([{ name: 'Vel', profession: 'scientist' }, { name: 'Paul', profession: 'mole' }])
    ).to.eql([{ name: 'Vel', profession: 'scientist' }]);
  });
  it('returns an array containing only objects where employee profession is not mole when passed an array containing several objects, more than one of which is an employee who has a profession of "mole"', () => {
    expect(
      removeAgents([
        { name: 'Vel', profession: 'scientist' },
        { name: 'Paul', profession: 'mole' },
        { name: 'Chris', profession: 'vet' },
        { name: 'Liam', profession: 'tutor' },
        { name: 'Simon', profession: 'mole' },
        { name: 'Sherpal', profession: 'chef' },
        { name: 'Patrick', profession: 'mole' },
      ])
    ).to.eql([
      { name: 'Vel', profession: 'scientist' },
      { name: 'Chris', profession: 'vet' },
      { name: 'Liam', profession: 'tutor' },
      { name: 'Sherpal', profession: 'chef' },
    ]);
  });
});

describe('makeNameTags', () => {
  it('returns an array with a single name tag when passed an array containing only one object', () => {
    expect(
      makeNameTags([
        {
          title: 'Mr',
          forename: 'Sam',
          surname: 'Caine',
          age: 30,
          company: 'Northcoders',
        },
      ])
    ).to.eql(['Mr Sam Caine, Northcoders']);
  });
  it('returns an array containing name tags for all the objects contained in the passed in array', () => {
    expect(
      makeNameTags([
        {
          title: 'Mr',
          forename: 'Sam',
          surname: 'Caine',
          age: 30,
          company: 'Northcoders',
        },
        {
          title: 'Mr',
          forename: 'Dan',
          surname: 'Abramov',
          age: 27,
          company: 'Facebook',
        },
        {
          title: 'Mr',
          forename: 'Wes',
          surname: 'Bos',
          age: 31,
          company: 'Wes Bos Inc.',
        },
      ])
    ).to.eql(['Mr Sam Caine, Northcoders', 'Mr Dan Abramov, Facebook', 'Mr Wes Bos, Wes Bos Inc.']);
  });
});

describe.only('createPoll', () => {
  it('returns an object where the key reflects the item in the passed in array and the value is 1', () => {
    expect(createPoll(['cake'])).to.eql({ cake: 1 });
  });
  it('returns an object with two different keys each with a value of 1 when the passed in an array containing two unique items', () => {
    expect(createPoll(['cake', 'biscuits'])).to.eql({ cake: 1, biscuits: 1 });
  });
  it('returns an object with one key with a value of 2 when the passed in array contains two of the same items', () => {
    expect(createPoll(['cake', 'cake'])).to.eql({ cake: 2 });
  });
  it('returns an object with two different keys, the first with a value of 1 and the second with a value of 3 when the passed in an array contains four items in total but only two unique items', () => {
    expect(createPoll(['crisps', 'cake', 'cake', 'cake'])).to.eql({
      crisps: 1,
      cake: 3,
    });
  });
  it('return an object with keys for each unique item and their respective counts when passed an array containing a mixture of unique and non-unique items', () => {
    expect(
      createPoll(['chocolate', 'crisps', 'cake', 'cake', 'crisps', 'cake', 'fruit', 'chocolate'])
    ).to.eql({
      chocolate: 2,
      crisps: 2,
      cake: 3,
      fruit: 1,
    });
  });
  it('returns and object with keys of each unique item and their respective count when passed an array from challenge1-data.js', () => {
    expect(createPoll(NCFruitBowl)).to.eql({
      apple: 276,
      pear: 223,
      banana: 263,
      orange: 238,
      'lonesome plum': 1,
    });
  });
});
