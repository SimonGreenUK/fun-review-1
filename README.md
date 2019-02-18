# CORE BLOCK REVIEW

For this block review, you have several specifications which need to be completed. You are expected to use full TDD in order to demonstrate your understanding of the questions and of good TDD practices. Good luck!

## Challenge 1

Using the appropriate array method, write a function that creates a tally object for arrays. E.g

```js
createTally(['cake', 'biscuit', 'biscuit']); // returns {cake: 1, biscuit: 2}
createTally(['dog', 'dog', 'dog']); // returns {dog: 3}
```

Your final test should be using the NCFruitBowl from the challenge1-data file. _DO NOT COPY AND PASTE THIS INTO YOUR SPEC FILE - it's huge!_ Be sure to export it properly. It should return the following object:

```js
{
  apple: 276,
  pear: 223,
  banana: 263,
  orange: 238,
  'lonesome plum': 1
}
```

## Challenge 2

Write a higher-order function called `invert`.

Your `invert` function should...
- ...take a function as its only argument.
- ...return a new function.

The original function that is passed in should...
- ...only be able to return a boolean.
- ...be able to take any number of arguments

The new function should... 
- ...return the boolean opposite to the original function.
- ...uses the same arguments as the original function.
- ...not be a mutation of the original function.

### For Example:

```js
const returnsTrue = () => true;
const returnsFalse = invert(returnsTrue);
returnsFalse(); // returns false
```

```js
const isEven = num => num % 2 === 0;
const isOdd = invert(isEven);
isOdd(1); // returns true
isOdd(2); // returns false
```

Please use the tests provided to help guide you in developing this function.

## Challenge 3

### SECTION A

Write a `Stock` class that will return stock instances.

An instance of the `Stock` class must have the following properties:
* name
* price
* quantity

```js
const marsBars = new Stock('marsBar', '50p', 6);

marsBars.name; // 'marsBar'

marsBars.price; // '50p'

marsBars.quantity; // 6
```

### SECTION B

Write a `VendingMachine` class that will return vending machine instances.

It must have a `dispenser` property, which initialises as an empty **array**.

```js
const testMachine = new VendingMachine();
testMachine.dispenser; // []
```

It must have a `credit` property, which will be a **number** representing amount of pence, starting at `0`.

```js
const testMachine = new VendingMachine();
testMachine.credit; // 0;
```

It must have a stock property, which will be an **object** with three alphabetical keys representing the rows of the machine. The values will be arrays, representing the rows of items in the machine. Individual positions in the machine can then be referenced by the row name and index position, e.g. `testMachine.stock.A[1]`.

```js
const testMachine = new VendingMachine();
testMachine.stock;
/** {
A : [{},{},{}],
B : [{},{},{}],
C : [{},{},{}]
};
**/
```

It must have an `addStock` method which will add new stock instances to the vending machine at the correct position.

```js
const marsBars = new Stock('marsBar', '50p', 6);
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, 'A1');
testMachine.stock;
/**
{ A: [{ name: 'marsBar', price: '50p', quantity: 6 }, {}, {} ],
  B: [ {}, {}, {} ],
  C: [ {}, {}, {} ] }
 **/
```

It must have an `addCredit` method which will update the machine credit.

```js
const testMachine = new VendingMachine();
testMachine.credit; // 0
testMachine.addCredit(50);
testMachine.credit; // 50
testMachine.addCredit(10);
testMachine.credit; // 60;
```

It must have a `purchaseItem` method which will **decrease** the quantity of the stock if there is sufficient credit and it will add an item to the dispenser.

```js
const marsBars = new Stock('marsBar', '50p', 6);
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, 'A2');
testMachine.addCredit(30);
testMachine.purchaseItem('A2'); // returns 'Insufficent credit!'
```

```js
const marsBars = new Stock('marsBar', '50p', 6);
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, 'A1');
testMachine.addCredit(60);
testMachine.purchaseItem('A1');
testMachine.stock;
/**
{ A: [{ name: 'marsBar', price: '50p', quantity: 5 }, {}, {} ],
  B: [ {}, {}, {} ],
  C: [ {}, {}, {} ] }
 **/
testMachine.credit; // 10
testMachine.dispenser; // ['marsBar']
```

## Challenge 4

### Make Pizzas

You're the supervisor of a fast-food pizza restaurant and your staff are having trouble keeping up with the orders. You decide that, as always, javascript has the answers, and you decide to build a function to improve the efficiency of your staff and solve all of your management woes.

Your challenge is to write a function which processes a single pizza order, making it ready for delivery (cooked and boxed!)  Your function should take a `pizzaOrder` (string)and `cb` (an error-first callback function).  

You have been provided with 3 async utility functions:

`preparePizza` 
- Takes a single pizza order and callback and invokes callback with a raw pizza.

`cookPizza` 
- Takes a single raw pizza and callback and and invokes callback returns a cooked pizza.

`boxPizza` 
- Takes a single cooked pizza and a callback and invokes callback with a boxedPizza

All of these utility functions are asynchronous so you'll have to make use of callbacks in order to get your pizzas ready for delivery in one piece.

**IMPORTANT** Your `makePizza` function should not return anything - you must call upon the utils functions to get the pizza cooked and boxed, ready for delivery!


## Challenge 5

Implement a function called `deeplyEquals`. This function will check if two passed variables contain the same values. If passed *arrays* or *objects* the function will check the contents for equality.
You will nee to use recursion in your implementation of this method.
Be sure to build up your tests carefully and take care in building up your logic step by step.

```js
deeplyEquals('a', 'a'); // true
deeplyEquals('a', 'b'); // false
deeplyEquals([1, 2, { a: 'hello' }], [1, 2, { a: 'hello' }]); // true
deeplyEquals([1, 2, { a: 'hello' }], [1, 2, { a: 'bye' }]); // false
```
