const rlSync = require('readline-sync');
const firstName = rlSync.question("What's your first name?\n");
const lastName = rlSync.question("What's your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);
