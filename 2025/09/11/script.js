function reverseSentence(sentence) {
  sentence = sentence.replace(/\s+/g, " ");
  let array = sentence.split(" ");
  array.reverse();
  sentence = array.join(" ");
  return sentence;
}

module.exports = reverseSentence;
