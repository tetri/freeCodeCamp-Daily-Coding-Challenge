function toDecimal(binary) {
  let decimal = 0;
  let len = binary.length;
  for (let i = 0; i < len; i++) {
    let num = parseInt(binary[i]);
    let pot = len - i - 1;
    decimal += num * 2 ** pot;
  }
  return decimal;
}

module.exports = toDecimal;
