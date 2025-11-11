function getLongestWord(sentence) {
  sentence = sentence.replace(/\./g, "");
  let words = sentence.split(" ");
  words.sort((a, b) => b.length - a.length);
  return words[0];
}

module.exports = getLongestWord;
