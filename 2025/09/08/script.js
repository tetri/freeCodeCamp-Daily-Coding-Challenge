function buildAcronym(str) {
  let parts = str.split(" ");

  const except = ["a", "for", "an", "and", "by", "of"];

  let acronym = "";
  for (let i = 0; i < parts.length; i++) {
    let word = parts[i];
    if (except.includes(word)) continue;

    acronym += word[0].toUpperCase();
  }
  return acronym;
}

module.exports = buildAcronym;
