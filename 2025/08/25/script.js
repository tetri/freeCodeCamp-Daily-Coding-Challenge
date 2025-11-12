function toCamelCase(s) {
  let camel = "";
  let parts = s.split(/[\s-_]+/);
  for (let i in parts) {
    let word = parts[i].toLowerCase();
    if (i > 0) word = word[0].toUpperCase() + word.slice(1, word.length);
    camel += word;
  }
  return camel;
}

module.exports = toCamelCase;
