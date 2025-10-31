function spookify(boo) {
  let spooky = "";
  let charIndex = 0;
  for (let i = 0; i < boo.length; i++) {
    if (boo[i] == "_" || boo[i] == "-") {
      spooky += "~";
    } else {
      if (charIndex % 2 == 0) {
        spooky += boo[i].toUpperCase();
      } else {
        spooky += boo[i].toLowerCase();
      }
      charIndex++;
    }
  }
  return spooky;
}

module.exports = spookify;
