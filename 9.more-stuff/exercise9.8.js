function isNotANumber(argument) {
  if (typeof argument === 'number' && argument === NaN) {
    return true;
  } else {
    return false;
  }
}
