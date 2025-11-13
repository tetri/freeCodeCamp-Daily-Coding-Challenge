function shiftArray(arr, n) {
  let size = arr.length;
  let shifted = [];
  for (let i = 0; i < size; i++) {
    let j = (i + n) % size;
    if (j < 0) j += size;
    shifted.push(arr[j]);
  }
  return shifted;
}

module.exports = shiftArray;
