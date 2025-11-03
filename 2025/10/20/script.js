function calculateTips(mealPrice, customTip) {
  const price = parseFloat(mealPrice.replace("$", ""));
  const tipPercent = parseFloat(customTip.replace("%", "")) / 100;

  const tip15 = (price * 0.15).toFixed(2);
  const tip20 = (price * 0.2).toFixed(2);
  const tipCustom = (price * tipPercent).toFixed(2);
  mealPrice = [`$${tip15}`, `$${tip20}`, `$${tipCustom}`];

  return mealPrice;
}

module.exports = calculateTips;
