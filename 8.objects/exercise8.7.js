const objToCopy = {
  person: 'bob',
  occupation: 'builder',
  location: 'who knows',
};

function copyObject(original, selectedKeysArray = []) {
  const newObject = {};

  if (selectedKeysArray.length === 0) {
    for (const key in original) {
      newObject[key] = original[key];
    }
  } else {
    for (const key in original) {
      if (selectedKeysArray.includes(key)) {
        newObject[key] = original[key];
      }
    }
  }

  return newObject;
}

console.log(copyObject(objToCopy, ['person', 'occupation']));
console.log(copyObject(objToCopy));
