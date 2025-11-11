function parseRomanNumeral(numeral) {
  let parts = numeral.split("");
  let numbers = [];
  for (let i = 0; i < parts.length; i++) {
    numbers[i] = roman(parts[i]);
  }

  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let nextNumber = numbers[i + 1] || 0;
    if (number < nextNumber) {
      number = nextNumber - number;
      i++;
    }

    result += number;
  }

  return result;
}

function roman(letter) {
  switch (letter) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
  }
}

module.exports = parseRomanNumeral;