function decode(s) {
  const regex = /\([\w\s?]+\)/g;
  let match = s.match(regex);

  while (match) {
    for (let i = 0; i < match.length; i++) {
      let m = match[i];
      let r = m
        .split("")
        .slice(1, m.length - 1)
        .reverse()
        .join("");
      s = s.replace(m, r);
    }
    match = s.match(regex);
  }

  return s;
}

module.exports = decode;
