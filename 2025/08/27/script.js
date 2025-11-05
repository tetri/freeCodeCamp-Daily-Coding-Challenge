function evaluate(numbers, operators) {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    let operator = operators[(i - 1) % operators.length];

    if (operator === "+") {
      result += numbers[i];
    } else if (operator === "-") {
      result -= numbers[i];
    } else if (operator === "*") {
      result *= numbers[i];
    } else if (operator === "/") {
      result /= numbers[i];
    } else if (operator === "%") {
      result %= numbers[i];
    }
  }
  return result;
}

module.exports = evaluate;
