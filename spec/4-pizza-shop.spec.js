const { expect } = require('chai');
const { makePizza, makePizzas } = require('../challenges/4-pizza-shop');

describe('makePizza()', () => {
  it('invokes callback with empty string when passed an empty string', (done) => {
    makePizza('', (err, delivery) => {
      expect(delivery).to.eql('');
      done();
    });
  });
  it('invokes callback with a hot fresh pizza in a well designed box when passed a single pizza', (done) => {
    makePizza('margherita', (err, delivery) => {
      expect(delivery).to.equal('a hot margherita in a well designed box');
      done();
    });
  });
});

describe.only('makePizzas', () => {
  it('returns an array with a pizza order when passed an array with a single order', (done) => {
    makePizzas(['margherita'], (err, delivery) => {
      expect(delivery).to.eql(['a hot margherita in a well designed box']);
      done();
    });
  });
  it('returns an array with a pizza order when passed an array with an order or two pizzas', (done) => {
    makePizzas(['margherita', 'pepperoni'], (err, delivery) => {
      expect(delivery).to.eql([
        'a hot margherita in a well designed box',
        'a hot pepperoni in a well designed box',
      ]);
      done();
    });
  });
  it('returns an array with a pizza order when passed an array with an order of three pizzas', (done) => {
    makePizzas(['margherita', 'pepperoni', 'vegan'], (err, delivery) => {
      expect(delivery).to.eql([
        'a hot margherita in a well designed box',
        'a hot pepperoni in a well designed box',
        'a hot vegan in a well designed box',
      ]);
      done();
    });
  });
});
