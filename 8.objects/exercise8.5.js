const myProtoObj = {
  foo: 1,
  bar: 2,
};

const newObject = Object.create(myProtoObj);
newObject.items = 0;

console.log(newObject);
