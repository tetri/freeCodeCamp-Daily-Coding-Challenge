function calculateAge(birthday) {
  let dateParts = "2025-11-27".split("-");
  let today = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

  dateParts = birthday.split("-");
  let birth = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

  let age = (today.getTime() - birth.getTime()) / 1000;
  age /= 60 * 60 * 24;
  return Math.trunc(age / 365.25);
}

module.exports = calculateAge;
