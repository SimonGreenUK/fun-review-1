
const { expect } = require('chai');
const makePizza = require('../challenges/challenge4');

describe('makePizza()', () => {
    it('invokes callback with empty array when passed an empty string', done => {
        makePizza('', (err, delivery) => {
            expect(order).to.eql('');
            done();
        });
    });
    it('invokes callback with a hot fresh pizza in a well designed box when passed a single pizza', done => {
        makePizza('margherita', (err, delivery) => {
            expect(delivery).to.equal('a hot margherita in a well designed box');
            done();
        });
    });
});