function isNegativeZero(argument) {
  if (1 / argument === -Infinity) {
    return true;
  } else {
    return false;
  }
}
