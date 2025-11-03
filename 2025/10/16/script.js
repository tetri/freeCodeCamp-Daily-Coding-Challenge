function validate(email) {
  let parts = email.split("@");
  if (parts.length !== 2) {
    return false;
  }

  let localPart = parts[0];
  if (localPart.length === 0) {
    return false;
  }

  if (localPart.startsWith(".") || localPart.endsWith(".")) return false;

  for (let char of localPart) {
    if (!/[a-zA-Z0-9\.\_\-]/.test(char)) {
      return false;
    }
  }

  let domainParts = parts[1].split(".");
  if (domainParts.length < 2) {
    return false;
  }

  for (let part of domainParts) {
    if (part.length === 0) {
      return false;
    }
  }

  if (!/[a-zA-Z][a-zA-Z]+$/.test(domainParts[domainParts.length - 1])) {
    return false;
  }

  return true;
}

module.exports = validate;
