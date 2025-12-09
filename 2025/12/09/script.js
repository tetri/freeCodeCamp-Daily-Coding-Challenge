function mostFrequent(arr) {
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    
    if (freq[value])
      freq[value]++;
    else
      freq[value] = 1;
  }

  return [... new Set(arr.sort((a, b) => freq[b] - freq[a]))][0];
}

module.exports = mostFrequent;