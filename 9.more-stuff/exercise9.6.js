const words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words, regex) {
  return words.filter(item => regex.test(item));
}

console.log(allMatches(words, /lab/));
