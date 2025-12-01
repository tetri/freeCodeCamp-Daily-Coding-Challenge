function detectAI(text) {
  let one = (text.match(/-/g) || []).length >= 2;

  let two = (text.match(/\(\w+\)/g) || []).length >= 2;

  let three = (text.match(/\w{7}\w?/g) || []).length >= 3;

  let four = false; // TODO: implement the last unused rule

  if (one || two || three || four) return "AI";
  return "Human";
}

module.exports = detectAI;
