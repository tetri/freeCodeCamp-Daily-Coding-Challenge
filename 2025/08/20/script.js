function squaresWithThree(n) {
  let threes = 0;
  for (let i = 5; i <= n; i++) {
    let square = (i ** 2).toString();
    if (square.includes("3")) threes++;
  }

  return threes;
}

module.exports = squaresWithThree;
