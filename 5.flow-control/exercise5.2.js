const rlsync = require('readline-sync');
const integer = Number(rlsync.question('Please provide a number\n'));

function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(integer);
