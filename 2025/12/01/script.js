function convertToKm(miles) {
  return Math.round((miles * 1.60934) * 100) / 100;
}

module.exports = convertToKm;