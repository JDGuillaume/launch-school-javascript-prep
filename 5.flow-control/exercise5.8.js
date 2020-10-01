function rangeClassifier(number) {
  if (number > 100) {
    console.log(`${number} is greater than 100!`);
  } else if (number >= 51 && number <= 100) {
    console.log(`${number} is between 51 and 100!`);
  } else if (number > 0 && number <= 50) {
    console.log(`${number} is between 0 and 50!`);
  } else {
    console.log(`${number} is less than 0!`);
  }
}

console.log(rangeClassifier(25));
console.log(rangeClassifier(75));
console.log(rangeClassifier(125));
console.log(rangeClassifier(-25));
