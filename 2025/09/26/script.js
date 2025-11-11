function speeding(speeds, limit) {
  let cars = 0;
  let sum = 0;
  for (let i = 0; i < speeds.length; i++) {
    let speed = speeds[i];
    let diff = speed - limit;
    if (diff > 0) {
      cars++;
      sum += diff;
    }
  }
  let average = 0;
  if (cars > 0) average = sum / cars;

  return [cars, average];
}

module.exports = speeding;
