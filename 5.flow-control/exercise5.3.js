function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log(`Please provide a number!`);
    return;
  }
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(5);
evenOrOdd('word');
evenOrOdd(true);
