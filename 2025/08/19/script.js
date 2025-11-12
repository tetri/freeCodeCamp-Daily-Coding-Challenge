function sumOfSquares(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) sum += i ** 2;
  return sum;
}

module.exports = sumOfSquares;
