function isUnnaturalPrime(n) {
  return isPrime(Math.abs(n));
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

module.exports = isUnnaturalPrime;
