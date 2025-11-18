function isSpam(number) {
  let parts = number.match(/\+(\d+) \((\d{3})\) (\d{3})-(\d{4})/);

  let countryCode = parts[1];
  let areaCode = parseInt(parts[2]);
  let localCode1 = parts[3];
  let localCode2 = parts[4];

  if (countryCode.length > 2 || countryCode[0] != "0") return true;

  if (areaCode < 200 || areaCode > 900) return true;

  let sumLocalCode1 = localCode1
    .split("")
    .reduce((a, i) => parseInt(i) + parseInt(a), 0);
  if (localCode2.includes(sumLocalCode1.toString())) return true;

  let onlyNumbers = number.replace(/[^\d]/g, "");
  if (onlyNumbers.match(/(\d)\1{3,}/g)) return true;

  return false;
}

module.exports = isSpam;
