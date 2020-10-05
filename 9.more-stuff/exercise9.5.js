function doSomething(string) {
  return string
    .split(' ')
    .reverse()
    .map(value => value.length);
}

/* This function takes a string,
separate's each word and places into an array (i.e., split()),
reverses the order of that array (i.e., reverse()),
and then returns a copy of that array where each word has been replaced by that words length (via map()) */
