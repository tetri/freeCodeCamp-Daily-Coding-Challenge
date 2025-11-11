function findMissingNumbers(arr) {
  //arr = [...new Set(arr)];
  arr.sort((a, b) => a - b);
  let minor = arr[0];
  let major = arr[arr.length - 1];
  let missing = [];
  for (let i = minor; i < major; i++) if (!arr.includes(i)) missing.push(i);
  return missing;
}

module.exports = findMissingNumbers;
