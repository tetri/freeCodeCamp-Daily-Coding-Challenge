function nthPrime(n) {
  let primes = 0;
  let value = 0;
  while (primes != n) {
    if (isPrime(value)) {
      primes++;
    }
    value++;
  }

  return value - 1;
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

module.exports = nthPrime;
