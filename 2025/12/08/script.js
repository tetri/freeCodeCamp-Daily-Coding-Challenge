function convertToKgs(lbs) {
  let unitA = "pounds";
  if (lbs == 1) unitA = "pound";

  let kgs = (Math.round(lbs * 0.453592 * 100) / 100).toFixed(2);

  let unitB = "kilograms";
  if (kgs == 1) unitB = "kilogram";
  return `${lbs} ${unitA} equals ${kgs} ${unitB}.`;
}

module.exports = convertToKgs;
