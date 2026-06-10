const add = function (first, second) {
  return first + second;
};

const subtract = function (first, second) {
  return first - second;
};

const sum = function (numberArray) {
  let solution = 0;

  for (let i = 0; i < numberArray.length; i++) {
    solution += numberArray[i];
  }
  return solution;
};

const multiply = function (numberArray) {
  let solution = 1;

  for (let i = 0; i < numberArray.length; i++) {
    solution *= numberArray[i];
  }
  return solution;
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
