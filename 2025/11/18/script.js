function oneHundred(chars) {
  while (chars.length < 100) chars += chars;

  return chars.substring(0, 100);
}

module.exports = oneHundred;
