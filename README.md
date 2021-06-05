# super-number

[![NPM version](http://img.shields.io/npm/v/super-number.svg)](https://www.npmjs.org/package/super-number)
[![Build Status](https://travis-ci.org/segandiaye/super-number.svg?branch=main)](https://travis-ci.org/segandiaye/super-number)

This is a tool that provides extra Integer or Number methods. It allows to perform some actions more easily with `Intseger or only Number` types which makes it simpler, more flexible, more practical and less effort.

## Installation

```sh
# Using npm
npm install --save super-number
```

### Usage

```js
const Ints = require('super-number');

// Syntax : Ints(array_of_integers).findNearestInteger(integer)
Ints([-5, -2, 0, 1, 5]).findNearestInteger(0); // expected output: 1
Ints([-5, -2, 0, 1, 5]).findNearestInteger(1); // expected output: 0
Ints([-5, -2, 0, 1, 5]).findNearestInteger(5); // expected output: 1
Ints([0, 1, 2, 5, 6]).findNearestInteger(5); // expected output: 6
Ints([-1, 0, 1]).findNearestInteger(0); // expected output: 1
Ints([-5, -2, 0, 1, 5]).findNearestInteger(-2); // expected output: 0
Ints([-5, -2, 0, 1, 5]).findNearestInteger(-5); // expected output: -2
Ints([-5, -4, -2, 0]).findNearestInteger(-2); // expected output: 0

// Even numbers
Ints(10).getLessEvenNumbers(); // expected output: [2, 4, 6, 8]
Ints(10).getLessOrEqualEvenNumbers(); // expected output: [2, 4, 6, 8, 10]
Ints([1, -2, 3, 4, -6, 7, 11]).getEvenNumbers(); // expected output: [-2, 4, -6]
Ints([0, 3, -4, 7, 9, 10, 13, 20]).getEvenNumbersLessThan(20); // expected output: [0, -4, 10]
Ints([0, 3, -4, 7, 9, -10, 13, 20]).getEvenNumbersLessThan(-4); // expected output: [-10]
Ints([0, 3, 4, 7, 9, -10, 13, 20]).getEvenNumbersLessOrEqualThan(20); // expected output: [0, 4, -10, 20]
Ints([0, -3, 4, -7, 9, -10, 13, -20]).getEvenNumbersLessOrEqualThan(-7); // expected output: [-10, -20]
Ints([0, -2, -4, 7, 9, 10, 13, 20]).getEvenNumbersGreaterThan(4); // expected output: [10, 20]
Ints([0, -2, -4, 7, 9, 10, 13, 20]).getEvenNumbersGreaterThan(-4); // expected output: [0, -2, 10, 20]
Ints([0, -2, -4, 4, 7, 9, 10, 13, 20]).getEvenNumbersGreaterOrEqualThan(4); // expected output: [4, 10, 20]
Ints([0, -2, -4, 7, 9, 10, 13, 20]).getEvenNumbersGreaterOrEqualThan(-4); // expected output: [0, -2, -4, 10, 20]
Ints(2).isEvenNumber(); // expected output: true
Ints(3).isEvenNumber(); // expected output: false
Ints(-2).isEvenNumber(); // expected output: true
Ints(-3).isEvenNumber(); // expected output: false

// Odd numbers
Ints(11).getLessOddNumbers(); // expected output: [1, 3, 5, 7, 9]
Ints(11).getLessOrEqualOddNumbers(); // expected output: [1, 3, 5, 7, 9, 11]
Ints([0, 1, 2, -3, 4, 6, 7, 11]).getOddNumbers(); // expected output: [1, -3, 7, 11]
Ints([0, 1, 2, -3, 4, 6, 7, 11]).getOddNumbersLessThan(11); // expected output: [1, -3, 7]
Ints([0, 1, -2, -3, -5, 6, 7, 11]).getOddNumbersLessThan(-3); // expected output: [-5]
Ints([0, 1, 2, -3, 4, 6, 7, 11]).getOddNumbersLessOrEqualThan(11); // expected output: [1, -3, 7, 11]
Ints([0, 1, -2, -3, -5, 6, 7, 11]).getOddNumbersLessOrEqualThan(-3); // expected output: [-3, -5]
Ints([0, 1, 2, -3, 4, 6, 7, 11]).getOddNumbersGreaterThan(3); // expected output: [7, 11]
Ints([0, 1, -2, -3, 4, 6, 7, 11]).getOddNumbersGreaterThan(-3); // expected output: [1, 7, 11]
Ints([0, 1, -2, 3, 4, 6, 7, 11]).getOddNumbersGreaterOrEqualThan(3); // expected output: [3, 7, 11]
Ints([0, 1, -2, -3, -5, 6, 7, 11]).getOddNumbersGreaterOrEqualThan(-3); // expected output: [1, -3, 7, 11]
Ints(3).isOddNumber(); // expected output: true
Ints(2).isOddNumber(); // expected output: false
Ints(-3).isOddNumber(); // expected output: true
Ints(-2).isOddNumber(); // expected output: false

// Some others useful operations
Ints([-5, -2, 0, 1, 5]).getPositivesNumbers(); // expected output: [1, 5]
Ints([-5, -2, 0, 1, 5]).getNegativesNumbers(); // expected output: [-5, -2]
Ints([3, -2, 4, 5, 10, 7, 8, 9, 12, 20]).getDivisiblesOf(10); // expected output: [-2, 5, 10]
Ints([3, 2, 4, 5, -10, 7, 8, 9, 12, 20]).getMultiplesOf(10); // expected output: [-10, 20]
Ints([3, 2, 4, 5, 10, 7, 8, 9, 12, -20]).getGreatersThan(10); // expected output: [12]
Ints([3, 2, 4, 5, 10, 7, 8, 9, 12, -20]).getGreatersThan(-10); // expected output: [3, 2, 4, 5, 10, 7, 8, 9, 12]
Ints([3, 2, 4, 5, 10, 7, 8, 9, 12, -20]).getLessersThan(10); // expected output: [3, 2, 4, 5, 7, 8, 9, -20]
Ints([3, 2, 4, 5, 10, 7, 8, 9, 12, -20]).getLessersThan(-10); // expected output: [-20]

// Prime numbers
Ints(11).getLessPrimeNumbers(); // expected output: [2, 3, 5, 7]
Ints(11).getLessOrEqualPrimeNumbers(); // expected output: [2, 3, 5, 7, 11]
Ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbers(); // expected output: [2, 3, 7, 11, 23]
Ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbersLessThan(23); // expected output: [2, 3, 7, 11]
Ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbersLessOrEqualThan(23); // expected output: [2, 3, 7, 11, 23]
Ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbersGreaterThan(7); // expected output: [11, 23]
Ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbersGreaterOrEqualThan(7); // expected output: [7, 11, 23]
Ints(2).isPrimeNumber(); // expected output: true
Ints(4).isPrimeNumber(); // expected output: false
```
