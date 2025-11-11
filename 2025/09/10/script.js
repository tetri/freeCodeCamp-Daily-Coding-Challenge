function arrayDiff(arr1, arr2) {
  let diff = [];
  for (let i = 0; i < arr1.length; i++)
    if (!arr2.includes(arr1[i])) diff.push(arr1[i]);

  for (let i = 0; i < arr2.length; i++)
    if (!arr1.includes(arr2[i])) diff.push(arr2[i]);

  diff.sort();

  return diff;
}

module.exports = arrayDiff;
