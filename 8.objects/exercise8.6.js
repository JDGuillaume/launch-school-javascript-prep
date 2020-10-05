const myProtoObj = {
  foo: 1,
  bar: 2,
};

const myObject = Object.create(myProtoObj);
myObject.items = 0;
myObject.qux = 3;

// Snippet 1 and Snippet 2 will not produce the same values, because the for/in loop will attempt to access the prototype properties.
