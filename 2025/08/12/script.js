function isValidNumber(n, base) {
  let number = n.toString().toUpperCase();
  let regex = "[0-1]";
  if (base < 10) {
    regex = "[0-" + (base - 1) + "]";
  } else {
    if (base == 10) {
      regex = "[0-9A]";
    } else {
      regex = "[0-9A-" + String.fromCharCode(54 + base) + "]";
    }
  }
  return number.replace(new RegExp(regex, "g"), "").length == 0;
}

module.exports = isValidNumber;
