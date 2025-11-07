function repeatVowels(str) {
  let total = 0;

  let funny = "";

  const vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      total++;
      funny += str[i] + str[i].repeat(total - 1).toLowerCase();
    } else {
      funny += str[i];
    }
  }

  return funny;
}

module.exports = repeatVowels;
