function tribonacciSequence(startSequence, length) {
  if (length <= startSequence.length)
    return startSequence.slice(0, length);

  let tribonacci = [];
  for (let i = 0; i < length; i++) {
    let one = startSequence[i - 3] || tribonacci[i - 3] || 0;
    let two = startSequence[i - 2] || tribonacci[i - 2] ||  0;
    let three = startSequence[i - 1] ||  tribonacci[i - 1] || 0;
    tribonacci[i] = startSequence[i] || one + two + three;
  }
  
  return tribonacci;
}

module.exports = tribonacciSequence;