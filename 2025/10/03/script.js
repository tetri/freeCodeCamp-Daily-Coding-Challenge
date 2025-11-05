function checkStrength(password) {
  let rules = 0;

  if (password.length >= 8) rules++;

  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) rules++;

  if (password.match(/[0-9]/)) rules++;

  if (password.match(/[!@#$%^&*]/)) rules++;

  switch (rules) {
    case 0:
    case 1:
      return "weak";
    case 2:
    case 3:
      return "medium";
    case 4:
      return "strong";
  }
}

module.exports = checkStrength;
