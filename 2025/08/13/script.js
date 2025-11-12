function fibonacciSequence(startSequence, length) {
  let fibonacci = [];
  for (let i = 0; i < length; i++) {
    let one = startSequence[i - 2] || fibonacci[i - 2] || 0;
    let two = startSequence[i - 1] || fibonacci[i - 1] || 0;
    fibonacci.push(startSequence[i] || one + two);
  }
  return fibonacci;
}

module.exports = fibonacciSequence;
