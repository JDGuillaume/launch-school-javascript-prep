const array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
console.log(array.filter(item => Number.isInteger(item)));
