function format(seconds) {
  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;

  let minutes = Math.floor(seconds / 60);
  seconds %= 60;

  if (hours > 0) {
    let _hours = hours.toString();
    let _minutes = minutes.toString().padStart(2, "0");
    let _seconds = seconds.toString().padStart(2, "0");
    return `${_hours}:${_minutes}:${_seconds}`;
  }

  if (minutes >= 0) {
    let _minutes = minutes.toString();
    let _seconds = seconds.toString().padStart(2, "0");
    return `${_minutes}:${_seconds}`;
  }
}

module.exports = format;
