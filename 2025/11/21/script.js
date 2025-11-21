function lcm(a, b) {
  let arr = [];

  let i = 2;
  do {
    if (!isPrime(i)) {
      i++;
      continue;
    }

    if (a % i == 0 || b % i == 0) {
      arr.push(i);

      if (a % i == 0) a = a / i;

      if (b % i == 0) b = b / i;
    } else {
      i++;
    }
  } while (a != 1 || b != 1);

  return arr.reduce((a, i) => a * i);
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

module.exports = lcm;
