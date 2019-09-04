const { expect } = require('chai');
const { deeplyEquals, flat, deepEntries } = require('../challenges/5-recursion');

describe('deepEntries', () => {
  it('returns an empty array when passed an empty object', () => {
    expect(deepEntries({})).to.eql([]);
  });
  it('returns an array with two items, the key and then the value when passed an object with a key value pair', () => {
    expect(deepEntries({ name: 'Sam' })).to.eql([['name', 'Sam']]);
  });
  it('returns an array containing two arrays, which each contain an array which contain the key and then the value of each item in the passed in object ', () => {
    expect(deepEntries({ name: 'Sam', favBook: 'Blood Meridian' })).to.eql([
      ['name', 'Sam'],
      ['favBook', 'Blood Meridian'],
    ]);
  });
  it('returns an array containing a sub-array for each key value pair within a single-layer nested object', () => {
    expect(deepEntries({ name: 'Sam', pets: { name: 'fido' } })).to.eql([
      ['name', 'Sam'],
      ['pets', [['name', 'fido']]],
    ]);
    expect(
      deepEntries({
        name: 'Sam',
        favBook: { title: 'Blood Meridian', author: { name: 'Cormac McCarthy' } },
      })
    ).to.eql([
      ['name', 'Sam'],
      ['favBook', [['title', 'Blood Meridian'], ['author', [['name', 'Cormac McCarthy']]]]],
    ]);
  });
});

describe('deeplyEquals', () => {});
describe('flat', () => {});
