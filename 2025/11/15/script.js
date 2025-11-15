function gcd(x, y) {
  let divisors = [];
  let max = Math.max(x, y);
  for (let i = 0; i <= max; i++) {
    if (!isPrime(i)) continue;

    while (x % i == 0 && y % i == 0) {
      divisors.push(i);
      x = x / i;
      y = y / i;
    }
  }

  let result = divisors.reduce((acc, item) => acc * item, 1);

  return result;
}

function isPrime(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  let prime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

module.exports = gcd;
