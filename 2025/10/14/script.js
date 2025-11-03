function count(text, pattern) {
  let result = 0;

  let i = text.indexOf(pattern);
  while (i != -1) {
    result++;
    text = text.substring(i+1);
    i = text.indexOf(pattern);
  }

  return result;
}

module.exports = count;