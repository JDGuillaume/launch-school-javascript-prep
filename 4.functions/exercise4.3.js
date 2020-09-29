const rlSync = require('readline-sync');

function getNumber(prompt) {
  return Number(rlSync.question(prompt));
}

const firstNumber = getNumber('Enter the first number:\n');
const secondNumber = getNumber('Enter the second number:\n');

console.log(
  `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}.`
);
