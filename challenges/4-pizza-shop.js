const { preparePizza, cookPizza, boxPizza } = require('../utils/challenge4-utils.js');

function makePizza(pizzaOrder, cb) {
  if (pizzaOrder.length < 1) cb(null, '');
  preparePizza(pizzaOrder, (err, preparedPizza) => {
    if (err) console.log(err);
    else {
      cookPizza(preparedPizza, (err, cookedPizza) => {
        if (err) console.log(err);
        else {
          boxPizza(cookedPizza, (err, boxedPizza) => {
            if (err) console.log(err);
            else {
              cb(null, boxedPizza);
            }
          });
        }
      });
    }
  });
}

function makePizzas(pizzaOrderArray, cb) {
  let resultArray = [];
  let count = 0;
  pizzaOrderArray.forEach((pizza, index) => {
    makePizza(pizza, (err, finishedPizza) => {
      resultArray[index] = finishedPizza;
      if (++count == pizzaOrderArray.length) {
        cb(null, resultArray);
      }
    });
  });
}

module.exports = { makePizza, makePizzas };
