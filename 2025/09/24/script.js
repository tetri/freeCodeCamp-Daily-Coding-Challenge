function isPerfectSquare(n) {
  let value = Math.sqrt(n);
  return value == value.toFixed(0);
}

module.exports = isPerfectSquare;
