function getLaptopCost(laptops, budget) {
  const uniquePrices = [...new Set(laptops)];
  const sortedPrices = uniquePrices.sort((a, b) => b - a);

  if (sortedPrices.length >= 2 && sortedPrices[1] <= budget) {
    return sortedPrices[1];
  }

  const affordable = sortedPrices.filter((price) => price <= budget);
  if (affordable.length > 0) {
    return affordable[0];
  }

  return 0;
}

module.exports = getLaptopCost;
