function adjustThermostat(currentF, targetC) {
  const targetF = (targetC * 9) / 5 + 32;
  const diff = targetF - currentF;
  if (diff == 0) {
    return "Hold";
  } else if (diff > 0) {
    return `Heat: ${diff.toFixed(1)} degrees Fahrenheit`;
  } else {
    return `Cool: ${Math.abs(diff).toFixed(1)} degrees Fahrenheit`;
  }
}

module.exports = adjustThermostat;
