function hexToDecimal(hex) {
  let decimal = 0;

  for (let i = 0; i < hex.length; i++) {
    decimal += value(hex[i]) * 16 ** (hex.length - i - 1);
  }

  return decimal;
}

function value(c) {
  switch (c) {
    case "A":
      return 10;
    case "B":
      return 11;
    case "C":
      return 12;
    case "D":
      return 13;
    case "E":
      return 14;
    case "F":
      return 15;
    default:
      return parseInt(c);
  }
}

module.exports = hexToDecimal;
