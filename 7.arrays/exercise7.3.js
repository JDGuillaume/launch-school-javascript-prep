const myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray
  .flat()
  .filter(item => item % 2 === 0)
  .map(item => console.log(item));
