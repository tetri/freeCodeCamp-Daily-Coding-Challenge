function adjustThermostat(temp, target) {
  if (temp === target) return "hold";
  if (temp > target) return "cool";
  return "heat";
}

module.exports = adjustThermostat;
