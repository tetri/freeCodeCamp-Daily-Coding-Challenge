function wiseSpeak(sentence) {
  const words = ["have", "must", "are", "will", "can"];

  const found = words.find((p) => new RegExp(`\\b${p}\\b`, "i").test(sentence));

  if (!found) {
    return sentence;
  }

  const parts = sentence.split(new RegExp(`\\b${found}\\b`, "i"));

  const before = parts[0].trim();
  let after = parts[1].trim();
  const punctuation = after.slice(-1);
  after = after.slice(0, -1).trim();

  const yoda = `${
    after.charAt(0).toUpperCase() + after.slice(1)
  }, ${before.toLowerCase()} ${found}${punctuation}`;
  return yoda;
}

module.exports = wiseSpeak;
