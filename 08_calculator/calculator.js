const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, curr) => total + curr, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total * curr)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	prod = 1;
  for (let i = 1; i <= a; i++) {
    prod *= i;
  }
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
