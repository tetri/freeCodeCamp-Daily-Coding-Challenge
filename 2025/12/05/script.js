function difference(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let item = arr1[i];
    if (!arr2.includes(item)) result.push(item);
  }

  for (let i = 0; i < arr2.length; i++) {
    let item = arr2[i];
    if (!arr1.includes(item)) result.push(item);
  }

  return result;
}

module.exports = difference;
