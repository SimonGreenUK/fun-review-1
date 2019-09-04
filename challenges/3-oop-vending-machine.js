class VendingMachine {
  constructor(credit = 0) {
    this.credit = credit;
    this.stock = {
      A: {},
      B: {},
      C: {},
    };
  }
  addStock(item, position) {
    this.stock[position] = item;
  }
  addCredit(creditToBeAdded) {
    this.credit += creditToBeAdded;
  }
  purchaseItem(position) {
    if (this.stock[position].price > this.credit) {
      return 'Insufficient credit!';
    } else {
      this.credit -= this.stock[position].price;
      this.stock[position].quantity -= 1;
      return this.stock[position].name;
    }
  }
}

module.exports = { VendingMachine };
