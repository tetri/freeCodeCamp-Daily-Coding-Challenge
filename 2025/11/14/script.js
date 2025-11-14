function daysUntilWeekend(dateString) {
  let dateParts = dateString.split("-");
  let date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  let day = date.getUTCDay();
  if (day == 0 || day == 6) return "It's the weekend!";
  switch (6 - day) {
    case 1:
      return "1 day until the weekend.";
    default:
      return `${6 - day} days until the weekend.`;
  }
}

module.exports = daysUntilWeekend;
