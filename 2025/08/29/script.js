function burnCandles(candles, leftoversNeeded) {
  let burned = 0;

  while (candles > 0) {
    candles--;
    burned++;

    if (burned % leftoversNeeded == 0)
      candles++;
  }

  return burned;
}

module.exports = burnCandles;