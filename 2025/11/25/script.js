function fizzBuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let item = "";
    let fizzBuzz = false;
    if (i % 3 == 0) {
      fizzBuzz = true;
      item += "Fizz";
    }
    if (i % 5 == 0) {
      fizzBuzz = true;
      item += "Buzz";
    }

    if (!fizzBuzz) item = i;

    arr.push(item);
  }
  return arr;
}

module.exports = fizzBuzz;
