function compressString(sentence) {
  let words = sentence.split(" ");

  let freq = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (freq[word]) freq[word]++;
    else freq[word] = 1;
  }

  let keys = Object.keys(freq);
  let compressed = "";
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let _freq = freq[key];
    compressed += key;
    if (_freq > 1) compressed += `(${_freq}) `;
    else compressed += " ";
  }

  return compressed.trim();
}

module.exports = compressString;
