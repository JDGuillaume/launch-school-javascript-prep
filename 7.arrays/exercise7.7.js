const numbers = [3, 5, 7];

function sumOfSquares(total, number) {
  return number * number + total;
}

console.log(numbers.reduce(sumOfSquares, 0));
