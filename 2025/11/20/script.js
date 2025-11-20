function longestWord(sentence) {
  sentence = sentence.replace(/[^a-zA-Z ]/g, "");
  let words = sentence.split(" ");
  let longest = 0;
  let word = "";
  for (let i = 0; i < words.length; i++)
    if (words[i].length > longest) {
      longest = words[i].length;
      word = words[i];
    }

  return word;
}

module.exports = longestWord;
