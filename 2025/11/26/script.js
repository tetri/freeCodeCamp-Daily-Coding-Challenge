function isFizzBuzz(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    let idx = i + 1;

    console.log(idx, sequence[i]);

    if (idx % 3 == 0 || idx % 5 == 0) {
      if (idx % 3 == 0 && idx % 5 == 0) {
        if (sequence[i] != "FizzBuzz") return false;
      } else {
        if (idx % 3 == 0) if (sequence[i] != "Fizz") return false;

        if (idx % 5 == 0) if (sequence[i] != "Buzz") return false;
      }
    } else {
      if (sequence[i] != idx) return false;
    }
  }

  return true;
}

module.exports = isFizzBuzz;
