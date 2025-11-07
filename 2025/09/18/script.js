function costToFill(tankSize, fuelLevel, pricePerGallon) {
  let need = tankSize - fuelLevel;
  let cost = need * pricePerGallon;
  return "$" + cost.toFixed(2);
}

module.exports = costToFill;