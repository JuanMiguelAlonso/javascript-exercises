const add = (numA, numB) => numA + numB;

const subtract = (numA, numB) => numA - numB;

const sum = (numbers) => {
  let result = 0;

  for ( const number of numbers )
    result = result + number;

  return result;
};

const multiply = (numbers) => {
  let result = numbers[0];

  for (let i=1;i<numbers.length;i++)
    result = result * numbers[i];

  return result;
};

const power = (number, power) => Math.pow(number, power);

const factorial = (num) => {
  if ( num === 0 )
    return 1;

  let result = 1;

  for (let i = num; i > 0; i--)
    result *= i;
  
  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
