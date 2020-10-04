const arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array, string) {
  const lengthOfString = string.length;
  if (lengthOfString % 2 !== 0) {
    array.push(lengthOfString);
  }
  return array;
}

console.log(arr.reduce(oddLengths, []));
