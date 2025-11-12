function milePace(miles, duration) {
  let parts = duration.split(":");
  let totalTimeInSeconds = parseInt(parts[0]) * 60 + parseInt(parts[1]);
  let pace = totalTimeInSeconds / miles;
  parts[0] = Math.floor(pace / 60)
    .toString()
    .padStart(2, "0");
  parts[1] = Math.floor(pace % 60)
    .toString()
    .padStart(2, "0");
  return parts.join(":");
}

module.exports = milePace;
