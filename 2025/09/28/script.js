function getHeadings(csv) {
  return csv.trim().split(/\s*,\s*/g);
}

module.exports = getHeadings;
