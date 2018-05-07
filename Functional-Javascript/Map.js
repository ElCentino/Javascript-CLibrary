"use_strict"

const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 12, 14, 12];

let number2 = _.map(numbers, x => x * x * x);

let evens = _.filter(number2, x => x % 2 === 0);

console.log(evens);