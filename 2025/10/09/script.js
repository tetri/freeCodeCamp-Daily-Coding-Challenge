function moonPhase(dateString) {
  const dateParts = dateString.split("-");
  const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  const reference = new Date(2000, 0, 6);
  const diff = date - reference;
  const diffDays = diff / (1000 * 60 * 60 * 24);
  const phaseDay = (diffDays % 28) + 1;
  if (phaseDay >= 22) return "Waning";
  if (phaseDay >= 15) return "Full";
  if (phaseDay >= 8) return "Waxing";
  return "New";
}

module.exports = moonPhase;
