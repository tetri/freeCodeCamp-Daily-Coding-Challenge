function secondLargest(arr) {
  arr = [...new Set(arr)];
  arr.sort((a, b) => b - a);
  return arr[1];
}

module.exports = secondLargest;
