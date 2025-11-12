function jbelmu(text) {
  let parts = text.split(" ");
  let jumbled = [];
  for (let i = 0; i < parts.length; i++) {
    let word = parts[i];
    if (word.length > 3) {
      let first = word[0];
      let last = word[word.length - 1];
      let middle = word.slice(1, word.length - 1);
      middle = middle.split("");
      middle.sort();
      middle = middle.join("");
      word = `${first}${middle}${last}`;
    }
    jumbled.push(word);
  }
  return jumbled.join(" ");
}

module.exports = jbelmu;
