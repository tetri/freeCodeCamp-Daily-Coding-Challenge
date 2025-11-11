function isPangram(sentence, letters) {
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/[^a-z]/g, '');

  let pangram = "";
  for (let i = 0; i < sentence.length; i++) {
    if (!pangram.includes(sentence[i]))
      pangram += sentence[i];
  }

  pangram = pangram.split('');
  pangram.sort();
  pangram = pangram.join('');

  letters = letters.split('');
  letters.sort();
  letters = letters.join('');

  return letters === pangram;
}

module.exports = isPangram;