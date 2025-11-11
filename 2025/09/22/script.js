function digitsOrLetters(str) {
  let digits = str.match(/[0-9]/g).length;
  let letters = str.toLowerCase().match(/[a-z]/g).length;
  if (digits === letters) return "tie";
  if (digits > letters) return "digits";
  return "letters";
}

module.exports = digitsOrLetters;
