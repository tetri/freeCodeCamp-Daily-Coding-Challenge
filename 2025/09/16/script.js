function capitalize(paragraph) {
  let result = "";
  let cap = true;
  for (let i = 0; i < paragraph.length; i++) {
    let c = paragraph[i];
    if (cap && c != " ") c = c.toUpperCase();
    result += c;
    if (c != " ") cap = ".?!".includes(c);
  }
  return result;
}

module.exports = capitalize;
