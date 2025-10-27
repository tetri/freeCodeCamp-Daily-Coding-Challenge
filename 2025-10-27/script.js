function sequence(n) {
  n = Array.from({ length: n }, (_, i) => i + 1).join("");
  return n;
}

module.exports = sequence;
