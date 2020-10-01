function shout(message) {
  if (message.length > 10) {
    return message.toUpperCase();
  } else {
    return message;
  }
}

console.log(shout('hello world'));
console.log(shout('goodbye'));
