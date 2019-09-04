const { expect } = require('chai');
const { VendingMachine } = require('../challenges/3-oop-vending-machine');

describe('VendingMachine', () => {
  it('returns a new VendingMachine instance with a credit property of 0 when not passed a credit argument', () => {
    const TestVendingMachine = new VendingMachine();
    expect(TestVendingMachine.credit).to.equal(0);
  });
  it('returns a new VendingMachine instance with a credit property of 5 when passed a credit argument of 5', () => {
    const TestVendingMachine = new VendingMachine(5);
    expect(TestVendingMachine.credit).to.equal(5);
  });
  it('returns a new VendingMachine instance with a stock property which is object containing keys of A, B and C representing rows in the vending machine', () => {
    const TestVendingMachine = new VendingMachine();
    expect(TestVendingMachine.stock).to.eql({
      A: {},
      B: {},
      C: {},
    });
  });
  it('returns a new VendingMachine instance with an addStock method which will add new stock to the vending machine at the correct position', () => {
    const TestVendingMachine = new VendingMachine();
    const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
    TestVendingMachine.addStock(marsBars, 'A');
    expect(TestVendingMachine.stock).to.eql({
      A: { name: 'marsBar', price: 50, quantity: 6 },
      B: {},
      C: {},
    });
  });
  it('returns a new VendingMachine instance with an addCredit method which will update the machine credit', () => {
    const TestVendingMachine = new VendingMachine();
    TestVendingMachine.addCredit(50);
    TestVendingMachine.addCredit(10);
    expect(TestVendingMachine.credit).to.eql(60);
  });
  it('returns a new VendingMachine instance with an purchaseItem method which returns "Insufficient credit!" if the item passed into the purchaseItem method costs more than the available credit"', () => {
    const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
    const testMachine = new VendingMachine();
    testMachine.addStock(marsBars, 'A');
    testMachine.addCredit(30);
    expect(testMachine.purchaseItem('A')).to.equal('Insufficient credit!');
  });
  it('returns a new VendingMachine instance with an purchaseItem method which will decrease the quantity of the stock if there is sufficient credit and returns the stock name. The amount of credit is also reduced by the price of the item being purchased', () => {
    const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
    const testMachine = new VendingMachine();
    testMachine.addStock(marsBars, 'A');
    testMachine.addCredit(60);
    expect(testMachine.purchaseItem('A')).to.equal('marsBar');
    expect(testMachine.stock).to.eql({
      A: { name: 'marsBar', price: 50, quantity: 5 },
      B: {},
      C: {},
    });
    expect(testMachine.credit).to.equal(10);
  });
});
