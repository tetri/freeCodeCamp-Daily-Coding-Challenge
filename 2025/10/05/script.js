function hasExoplanet(readings) {
  function getValue(char) {
    if (char.match(/[0-9]/g)) return parseInt(char);
    return char.charCodeAt(0) - 55;
  }

  let values = [];
  for (let i = 0; i < readings.length; i++) values.push(getValue(readings[i]));

  const average = values.reduce((a, i) => a + i) / values.length;
  const limit = average * 0.8;

  for (let i = 0; i < values.length; i++) if (values[i] <= limit) return true;

  return false;
}

module.exports = hasExoplanet;
