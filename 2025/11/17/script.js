function isMatch(fingerprintA, fingerprintB) {
  if (fingerprintA.length != fingerprintB.length)
    return false;

  let length = fingerprintA.length;
  let diff = 0;
  for (let i = 0; i < length; i++)
    diff += (fingerprintA[i] != fingerprintB[i] ? 1 : 0);
  
  if ((diff/length) * 100 > 10)
  return false;

  return true;
}

module.exports = isMatch;