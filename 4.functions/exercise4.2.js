const rlSync = require('readline-sync');

function getName(question) {
  return rlSync.question(question);
}

const firstName = getName("What's your first name?\n");
const lastName = getName("What's your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);
