function compare(word, guess) {
  let _word = word.split("");
  let _guess = guess.split("");
  let _compare = "0".repeat(_word.length).split("");

  for (let i = 0; i < _word.length; i++) {
    if (_word[i] == _guess[i]) {
      _compare[i] = "2";
      _word[i] = "*";
    }
  }

  for (let i = 0; i < _word.length; i++) {
    let index = _word.findIndex((el) => el == _guess[i]);
    if (index != -1) {
      _compare[i] = "1";
      _word[index] = "*";
    }
  }

  return _compare.join("");
}

module.exports = compare;
