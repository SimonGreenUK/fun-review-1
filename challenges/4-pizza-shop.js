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

module.exports = makePizza;
