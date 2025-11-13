function findDuplicates(arr) {
  let dups = [];
  while (arr.length) {
    let item = arr.pop();
    if (arr.includes(item)) dups.push(item);
  }
  dups = [...new Set(dups)];
  dups.sort((a, b) => a - b);
  return dups;
}

module.exports = findDuplicates;
