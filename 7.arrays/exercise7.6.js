const arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(arr.map(item => item.length).filter(item => item % 2 !== 0));
