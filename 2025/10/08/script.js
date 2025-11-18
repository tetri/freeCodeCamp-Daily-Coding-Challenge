function goldilocksZone(mass) {
  const luminosity = Math.pow(mass, 3.5);
  const factor = Math.sqrt(luminosity);
  const start = Number((0.95 * factor).toFixed(2));
  const end = Number((1.37 * factor).toFixed(2));
  return [start, end];
}

module.exports = goldilocksZone;
