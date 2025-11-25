function countCharacters(sentence) {
  sentence = sentence.replace(/[^\w]/g, "").toLowerCase();

  let arr = [];

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    arr[char] = (arr[char] || 0) + 1;
  }

  arr = Object.keys(arr)
    .sort()
    .reduce((obj, key) => {
      obj.push(key + " " + arr[key]);
      return obj;
    }, []);

  return arr;
}

module.exports = countCharacters;
