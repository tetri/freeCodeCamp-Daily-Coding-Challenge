function sendMessage(route) {
  let time = 0;
  for (let i = 0; i < route.length; i++) {
    time += route[i] / 300_000 + 0.5;
    if (i == route.length - 1) time -= 0.5;
  }

  return Math.round(time * 10000) / 10000;
}

module.exports = sendMessage;
