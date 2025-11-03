function to12(time) {
  let hour = parseInt(time.substring(0, 2));
  let minute = time.substring(2, 4);
  let ampm = "AM";
  if (hour > 12) {
    hour -= 12;
    ampm = "PM";
  }
  if (hour == 0) {
    hour = 12;
  }

  return `${hour}:${minute} ${ampm}`;
}

module.exports = to12;
