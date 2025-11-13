function findTarget(arr, target) {
  let actual = arr[0];
  let next = 0;
  for (let i = 1; i < arr.length; i++) {
    next = arr[i];
    if (actual + next === target) return [i - 1, i];
    actual = arr[i];
  }
  return "Target not found";
}

module.exports = findTarget;
