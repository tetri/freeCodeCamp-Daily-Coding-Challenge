function tooMuchScreenTime(hours) {
  let sum = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= 10) return true;

    if (i >= 3)
      if ((hours[i - 2] + hours[i - 1] + hours[i]) / 3 >= 8) return true;

    sum += hours[i];
  }

  if (sum / hours.length >= 6) return true;

  return false;
}

module.exports = tooMuchScreenTime;
