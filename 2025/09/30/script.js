function formatNumber(number) {
  let parts = number.match(/(\d{1})(\d{3})(\d{3})(\d{4})/);
  return `+${parts[1]} (${parts[2]}) ${parts[3]}-${parts[4]}`;
}

module.exports = formatNumber;