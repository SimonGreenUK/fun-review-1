# FUNDAMENTALS BLOCK REVIEW

For this block review, you have several specifications which need to be completed. You are expected to use full TDD in order to demonstrate your understanding of the questions and of good TDD practices. Good luck!

## Section 1 human-resources (Array Methods)

For each of these challenges, be sure to use the appropriate array-method, and demonstrate your understanding of TDD. 

### 1 - removeAgents

After a survey of your organisation, it has transpired that a few of the respondents have been very open about committing corporate espionage. As a diligent HR professional, please remove each employee whose admitted profession is `mole`;

Your function should take an array of people objects, and return a new array of people objects whose profession is not `mole`.

```js

const employees = [
  {name: 'Sam', profession: 'lecturer'}, 
  {name: 'Mitch', profession: 'mole'}
];

removeAgents(employees) // returns [{name: 'Sam', profession: 'lecturer'}];

```

### 2 - makeNameTags

You wouldn't usually be found doing work like this, but Jon is off sick, and the HR Director is having a meeting in a couple of hours. Please make name tags for each of the guests. 

Given an array of guest objects containing `title`, `forename`, `lastname` and `company` keys, your makeNameTags function should return a new array with the text (formatted as `<title> <forename> <surname>, <company>`) for each name tag. 

```js

const guests = [{title: 'Mr', forename: 'Sam', surname: 'Caine', age: 30, company: 'Northcoders'}];

makeNameTags(guests) // returns ['Mr Sam Caine, Northcoders']


```

### 3 - createPoll

Usually we'd use survey monkey, but the managers have taken to building polls across the organisation as string. Give an array of these strings, please build a much more useful poll object. 

```js
createPoll(['cake', 'biscuit', 'biscuit']); // returns {cake: 1, biscuit: 2}
createPoll(['dog', 'dog', 'dog']); // returns {dog: 3}
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


Write a `VendingMachine` class that will return vending machine instances.


It must have a `credit` property, which will be a **number** representing amount of pence, starting at `0`.

```js
const testMachine = new VendingMachine();
testMachine.credit; // 0;
```

It must have a stock property, an object representing the rows of items in the machine.  Individual positions in the machine can then be referenced by the row, either "A", "B" or "C" e.g.

```js
const testMachine = new VendingMachine();
testMachine.stock;
/** {
A : {},
B : {},
C : {},
};
**/
```

It must have an `addStock` method which will add new stock to the vending machine at the correct position.

```js
const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, 'A');
testMachine.stock;
/**
{ A: { name: 'marsBar', price: '50p', quantity: 6 },
  B: {},
  C: {} }
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

It must have a `purchaseItem` method which will **decrease** the quantity of the stock if there is sufficient credit and returns the stock name.

```js
const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, 'A');
testMachine.addCredit(30);
testMachine.purchaseItem('A'); // returns 'Insufficent credit!'
```

```js
const marsBars = { name: 'marsBar', price: 50, quantity: 6 };
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, 'A');
testMachine.addCredit(60);
testMachine.purchaseItem('A'); // returns 'marsBar'
testMachine.stock;
/**
{ A: { name: 'marsBar', price: '50p', quantity: 5 },
  B: {},
  C: {}
}
 **/
testMachine.credit; // 10
```

## Challenge 4

### Make Pizza

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
