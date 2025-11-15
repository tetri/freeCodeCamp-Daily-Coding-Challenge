function isValidIPv4(ipv4) {
  let parts = ipv4.split(".");

  if (parts.length != 4) return false;

  for (let i = 0; i < parts.length; i++) if (!validPart(parts[i])) return false;

  return true;
}

function validPart(part) {
  if (part == "") return false;

  let number = parseInt(part);
  if (number > 255) return false;

  if (part != number.toString()) return false;

  return true;
}

module.exports = isValidIPv4;
