const add = function(add1, add2) {
	return add1 + add2
};

const subtract = function(sub1, sub2) {
	return sub1 - sub2
};

const sum = function(numbers) {
  var result = 0

  if (numbers.length > 0) {
    
  
	numbers.forEach(element => {
    result += element;
  });
  
  }

  return result;
};

const multiply = function(numbers) {
  result = 1;

  if (numbers.length > 0) {

  
	numbers.forEach(element => {
    result *= element;
  });
  
  }

  return result;
};

const power = function(base,exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	result = 1
  for (i = number; i > 0; i--) {
    result *= i
  }

  return result;
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
