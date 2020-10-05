const obj = {
  b: 2,
  a: 1,
  c: 3,
};

const array = [];

for (key in obj) {
  array.push(key.toUpperCase());
}

console.log(obj);
console.log(array);
